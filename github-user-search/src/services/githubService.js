import axios from "axios";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    "https://api.github.com/search/users?q", "location", "minRepos"]
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};
