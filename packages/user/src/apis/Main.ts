import { instance } from './axios';
// const baseURL = import.meta.env.VITE_SERVER_BASE_URL;

export const getProjects = async () => {
  return await instance.get('/project/list');
};
