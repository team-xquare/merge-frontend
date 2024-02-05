import { instance } from './axios';
import { signinType, signupType } from '../types/signType';

export const signUp = async (data: signupType) => {
  return await instance.post('/auth', data);
};

export const login = async (data: signinType) => {
  return await instance.post('/auth/login', data);
};
