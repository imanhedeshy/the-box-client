import axios from "axios";

import { getToken, removeToken } from "./storageFuncs";

const API_URL = process.env.REACT_APP_API_URL;

const logIn = async (username, password) => {
  try {
    return await axios
      .post(`${API_URL}/users/login`, {
        username: username,
        password: password,
      })
      .then((res) => {
        if (res.data.success) return res.data;
      });
  } catch (error) {
    console.error("Error Logging in:", error);
    console.log(error.response.data);
    return error.response.data;
  }
};

const signUp = async (username, password, email) => {
  return await axios
    .post(`${API_URL}/users/register`, {
      username: username,
      email: email,
      password: password,
    })
    .then((res) => {
      if (res.data.success) return res.data.token;
      else throw new Error("SignUp unsucessful!");
    })
    .catch((error) => {
      console.error("Error registering:", error.response.data);
    });
};

const getThreadsById = async (id) => {
  const token = await getToken();
  try {
    return await axios.get(`${API_URL}/threads`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.error({ error: "Error fetching threads from the server." });
  }
};

const createThread = async (content) => {
  // const body = { user_id: thread.userId, content: thread.content };
  const body = { content: content };
  const headers = { Authorization: `${await getToken()}` };
  try {
    return await axios
      .post(`${API_URL}/threads`, body, { headers })
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    console.error("Error connecting to the server:", error);
  }
};

const signOut = async () => {
  removeToken("Token");
};

export { logIn, signUp, getThreadsById, signOut, createThread };
