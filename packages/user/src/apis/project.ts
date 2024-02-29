import axios from 'axios';
import { instance } from './instance';
import { ProjectRegisterType } from '../types/projectType';
import { toast } from 'react-toastify';

type createProjectType = {
  project: ProjectRegisterType;
  logo: File;
  projectImage: File[];
};

export const getProjects = async () => {
  const url = import.meta.env.VITE_SERVER_BASE_URL;
  return await axios.get(`${url}/project/list`);
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

export const projectDuplicate = async (name: string) => {
  const result = await instance.get(`/project/duplicate?projectNameEn=${name}`);

  if (!result.data) {
    toast.success('사용 가능한 프로젝트 이름입니다.');
  } else {
    toast.error('사용 불가능한 프로젝트 이름입니다.');
  }
};
