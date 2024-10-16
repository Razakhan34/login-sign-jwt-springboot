import axios from "axios";

const BASE_URL = "http://localhost:8081";

const login = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};

const register = async (userData, token) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/register`, userData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};

const getAllUsers = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/admin/get-all-users`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};

const getYourProfile = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/adminuser/get-profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};

const getUserById = async (userId, token) => {
  try {
    const response = await axios.get(`${BASE_URL}/admin/get-users/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};

const deleteUser = async (userId, token) => {
  try {
    const response = await axios.delete(`${BASE_URL}/admin/delete/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};

const updateUser = async (userId, userData, token) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/admin/update/${userId}`,
      userData,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};

/** AUTHENTICATION CHECKER */
const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
};

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

const isAdmin = () => {
  const role = localStorage.getItem("role");
  return role === "ADMIN";
};

const isUser = () => {
  const role = localStorage.getItem("role");
  return role === "USER";
};

const adminOnly = () => {
  return isAuthenticated() && isAdmin();
};

export default {
  login,
  register,
  getAllUsers,
  getYourProfile,
  getUserById,
  deleteUser,
  updateUser,
  logout,
  isAuthenticated,
  isAdmin,
  isUser,
  adminOnly,
};
