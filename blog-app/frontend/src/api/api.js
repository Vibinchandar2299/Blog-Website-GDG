import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// API service functions
export const signupUser = (userData) => API.post("/auth/signup", userData);
export const loginUser = (userData) => API.post("/auth/login", userData);

export const getBlogs = () => API.get("/blogs");
export const getBlogById = (id) => API.get(`/blogs/${id}`);
export const createBlog = (blogData) => API.post("/blogs", blogData);
export const updateBlog = (id, blogData) => API.put(`/blogs/${id}`, blogData);
export const deleteBlog = (id) => API.delete(`/blogs/${id}`);

export default API;
