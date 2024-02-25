import { instance } from './axios';
import { projectType } from '../types/projectType';

type createProjectType = {
  project: projectType;
  logo: File;
  projectImage: File[];
};

export const getDetailProject = async (id: string) => {
  return await instance.get(`/project/detail?id=${id}`);
};

export const getMyProject = async (email: string) => {
  return await instance.get(`/project/user?email=${email}`);
};

export const createProject = async (data: createProjectType) => {
  return await instance.post('/project', data);
};

export const hideProject = async (id: string) => {
  return await instance.put(`/project/${id}/hide`);
};

export const unhideProject = async (id: string) => {
  return await instance.put(`/project/${id}/unhide`);
};
