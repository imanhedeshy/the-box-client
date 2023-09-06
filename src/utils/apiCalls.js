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

const signUp = async (username, password, email, userType) => {
  return await axios
    .post(`${API_URL}/users/register`, {
      username: username,
      email: email,
      userType: userType,
      password: password,
    })
    .then((res) => {
      // if (res.data.success) return res.data;
      // else throw new Error("SignUp unsucessful!");
      console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      // console.error("Error registering:", error.response.data);
      return error.response.data;
    });
};

const getStudentByUsername = async (username) => {
  const token = await getToken();
  try {
    const result = await axios.get(`${API_URL}/users/${username}`, {
      headers: {
        Authorization: token,
      },
    });
    return result;
  } catch (error) {
    console.error({ error: "Error fetching threads from the server." });
  }
};

const getThreadsById = async (id) => {
  const token = await getToken();
  try {
    const result = await axios.get(`${API_URL}/threads`, {
      headers: {
        Authorization: token,
      },
    });
    return result;
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

const likeThreadById = async (thread_id) => {
  const body = { thread_id: thread_id };
  const headers = { Authorization: `${await getToken()}` };

  try {
    const result = await axios.put(`${API_URL}/threads`, body, {
      headers,
    });
    console.log(result);
  } catch (error) {
    console.error("Error sending PUT request to /threads:", error);
  }
};

const deleteThreadById = async (thread_id) => {
  const headers = { Authorization: `${await getToken()}` };

  try {
    const result = await axios.delete(`${API_URL}/threads/${thread_id}`, {
      headers,
    });
    console.log(result);
  } catch (error) {
    console.error(`Error deleting thread with ID ${thread_id}:`, error);
    throw error;
  }
};

const createCommentbyId = async (thread_id, content) => {
  const headers = { Authorization: `${await getToken()}` };
  const body = { content: content };

  try {
    const result = await axios.post(`${API_URL}/threads/${thread_id}`, body, {
      headers,
    });
    return result.data;
  } catch (error) {
    console.error("Error sending POST request to /threads/:id:", error);
  }
};

const signOut = async () => {
  removeToken("Token");
  localStorage.clear();
};

export {
  logIn,
  signUp,
  getThreadsById,
  signOut,
  createThread,
  likeThreadById,
  deleteThreadById,
  createCommentbyId,
  getStudentByUsername,
};
