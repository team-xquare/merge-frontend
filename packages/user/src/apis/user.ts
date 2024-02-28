import { instance } from './instance';

export const getUserInfo = async () => {
  return await instance.get('/user/myInfo');
};

export const putUserUpdate = async (link: string) => {
  return await instance.put('/user/update', { github: link });
};
