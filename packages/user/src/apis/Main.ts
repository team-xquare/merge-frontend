import { instance } from './axios';

export const getProjects = async () => {
  return await instance.get('/project/list');
};
