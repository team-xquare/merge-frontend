import { instance } from './instance';

export const getProjects = async () => {
  return await instance.get('/project/list');
};
