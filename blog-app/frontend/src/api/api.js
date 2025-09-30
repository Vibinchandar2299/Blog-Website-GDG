import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

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
