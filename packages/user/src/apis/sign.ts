import { instance } from './instance';
import { signinType, signupType } from '../types/signType';
import { toast } from 'react-toastify';

export const signUp = async (data: signupType) => {
  return await instance.post('/auth', data);
};

export const login = async (data: signinType) => {
  return await instance.post('/auth/login', data);
};

export const idDuplicate = async (id: string) => {
  const result = await instance.get(`/auth/duplicate?accountId=${id}`);

  if (!result.data) {
    toast.success('사용 가능한 아이디입니다.');
  } else {
    toast.error('사용 불가능한 아이디입니다.');
  }
};

export const reissue = async (refreshToken: string) => {
  return await instance.post('/auth/reissue', { refresh_token: refreshToken });
};
