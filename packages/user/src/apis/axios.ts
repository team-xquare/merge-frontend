import axios from 'axios';
import { Cookie } from '../utils/cookie';
import { toast } from 'react-toastify';

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
    toast.error('오류가 발생헀습니다');
    return Promise.reject(err);
  },
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    const {
      //config,
      response: { status },
    } = err;
    if (status === 403) {
      //const token = Cookie.get('refreshToken');
    } else {
      toast.error('오류가 발생헀습니다');
      return Promise.reject(err);
    }
  },
);
