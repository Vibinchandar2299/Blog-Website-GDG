// API configuration
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const apiConfig = {
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
};
