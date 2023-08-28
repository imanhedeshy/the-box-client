import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const logIn = async (username, password) => {
  try {
    return await axios
      .get(`${API_URL}/users/${username}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJpbWFuaGVkZXNoeSIsImlhdCI6MTY5MzExNzIzNywiZXhwIjoxNjkzMjI1MjM3fQ.DfHVMGY9X1cE74oD-u34nsxBdMbErVDLshiBx4Jajms",
        },
      })
      .then((res) => {
        if (res.data.success) return res.data.user.username;
        else throw new Error("SignUp unsucessful!");
      });
  } catch (error) {
    console.error("Error registering:", error);
  }
};

const signUp = async (username, password, email) => {
  try {
    return await axios
      .post(`${API_URL}/users/register`, {
        username: username,
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.success) return res.data.user.username;
        else throw new Error("SignUp unsucessful!");
      });
  } catch (error) {
    console.error("Error registering:", error.response.data);
  }
};

const getThreadsById = async (id) => {
  try {
    return await axios.get(`${API_URL}/threads`);
  } catch (error) {
    console.error({ error: "Error fetching threads from the server." });
  }
};

export { logIn, signUp, getThreadsById };
