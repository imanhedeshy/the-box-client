const setToken = async (token) => {
  try {
    // Removing data from session storage
    await sessionStorage.removeItem("Token");

    // Writing data to session storage
    await sessionStorage.setItem("Token", token);

    return true;
  } catch (error) {
    console.error("Error setting token in session storage:", error);
    return false;
  }
};

const getToken = async () => {
  try {
    // Reading data from session storage
    const storedToken = await sessionStorage.getItem("Token");
    console.log(storedToken);
    return storedToken;
  } catch (error) {
    console.error("Error getting token from session storage:", error);
    return false;
  }
};

export { setToken, getToken };
