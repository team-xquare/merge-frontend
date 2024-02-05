import { instance } from './axios';

export const signUp = async () => {
  return await instance.post('/auth', {
    student_name: '이지후',
    github: 'https://github.com/dutexion',
    password: '1234abcd!',
    school_gcn: '1112',
    email: 'dutexion@dsm.hs.kr',
    account_id: 'dutexion',
  });
};

export const login = async () => {
  return await instance.post('/auth/login', {
    account_id: '김희찬짠ㄴㅇㅇ',
    password: 'asdfg123!',
  });
};
