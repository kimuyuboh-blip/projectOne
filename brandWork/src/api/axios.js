import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, // cookies (refresh token)
});

// response interceptor to attempt refresh once on 401/403
api.interceptors.response.use(
  response => response,
  async (error) => {
    const original = error.config;
    if (!original) return Promise.reject(error);

    // avoid infinite loop
    if (error.response && (error.response.status === 401 || error.response.status === 403) && !original._retry) {
      original._retry = true;
      try {
        const refresh = await api.get("/api/refresh");
        const newToken = refresh.data.accessToken;
        if (newToken) {
          localStorage.setItem("access_token", newToken);
          original.headers.Authorization = `Bearer ${newToken}`;
          return api(original);
        }
      } catch (err) {
        // refresh failed — fall through to reject
        localStorage.removeItem("access_token");
      }
    }
    return Promise.reject(error);
  }
);

// request interceptor to attach access token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
