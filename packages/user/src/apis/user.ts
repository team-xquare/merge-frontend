import { instance } from './axios';

export const getUserInfo = async () => {
  return await instance.get('/user/myInfo');
};
