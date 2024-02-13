import { instance } from './axios';
import { projectType } from '../types/projectType';

type createProjectType = {
  project: projectType;
  logo: File;
  projectImage: File[];
};

export const getMyProject = async (email: string) => {
  return await instance.get(`/project/user?email=${email}`);
};

export const createProject = async (data: createProjectType) => {
  return await instance.post('/project', data);
};
