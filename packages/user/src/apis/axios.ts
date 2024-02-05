import axios from 'axios';
import { Cookie } from '../../utils/cookie';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASE_URL,
  timeout: 3000,
});

instance.interceptors.request.use(
  (res) => {
    const token = Cookie.get('accessToken');
    if (token) res.headers.Authorization = `Bearer ${token}`;
    return res;
  },
  (err) => {
    return Promise.reject(err);
  },
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    const {
      config,
      response: { status },
    } = err;
    if (status === 403) {
      const token = Cookie.get('refreshToken');
    } else {
      return Promise.reject(err);
    }
  },
);
