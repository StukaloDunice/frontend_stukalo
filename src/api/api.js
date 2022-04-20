import axios from 'axios';

import { getToken } from '../lib/localstorage';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      const { headers } = config;
      headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error),
);
export default api;
