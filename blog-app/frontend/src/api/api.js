import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // 👈 Adjust if backend is deployed
});

// Auth APIs
export const login = (formData) => API.post("/auth/login", formData);
export const signup = (formData) => API.post("/auth/signup", formData);

// Blog APIs
export const getBlogs = () => API.get("/blogs");
export const getBlogById = (id) => API.get(`/blogs/${id}`);
export const createBlog = (blogData) => {
  const token = localStorage.getItem("token"); // or wherever you store it
  return API.post(
    "/blogs",
    blogData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
export const updateBlog = (id, blogData) => {
  const token = localStorage.getItem("token");
  return API.put(`/blogs/${id}`, blogData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const deleteBlog = (id) => {
  const token = localStorage.getItem("token");
  return API.delete(`/blogs/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
