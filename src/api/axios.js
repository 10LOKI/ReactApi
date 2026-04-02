import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
});

localStorage.setItem('token', '20|EdyHRD3a7MOZskQLPs4WOxA52TVgAawXsNCi9M1Zec8555b1');

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;