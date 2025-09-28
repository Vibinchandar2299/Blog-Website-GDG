import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const signup = (data) => API.post("/auth/signup", data);
export const login = (data) => API.post("/auth/login", data);

export const getBlogs = () => API.get("/blogs");
export const getBlog = (id) => API.get(`/blogs/${id}`);
export const createBlog = (data, token) =>
  API.post("/blogs", data, { headers: { Authorization: `Bearer ${token}` } });
export const updateBlog = (id, data, token) =>
  API.put(`/blogs/${id}`, data, { headers: { Authorization: `Bearer ${token}` } });
export const deleteBlog = (id, token) =>
  API.delete(`/blogs/${id}`, { headers: { Authorization: `Bearer ${token}` } });
