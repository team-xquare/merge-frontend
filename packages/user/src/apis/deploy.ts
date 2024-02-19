import { instance } from './axios';
import { deployType } from '../types/projectType';
import { toast } from 'react-toastify';

export const deploy = async (data: deployType) => {
  const { container_name, github_url, service_type, redis, mysql } = data;

  const postData = {
    container_name,
    github_url,
    service_type,
    project_id: 'c842b3a0-59a0-4c74-9674-695e1701a19c',
    use_database: {
      redis,
      mysql,
    },
  };

  console.log(postData);

  return await instance.post('/deploy', postData);
};

export const duplication = async (name: string) => {
  const result = await instance.get(`/deploy/duplicate?container-name=${name}`);

  if (!result.data) {
    toast.success('사용되지 않은 컨테이너 명입니다.');
  } else {
    toast.error('이미 사용된 컨테이너 명입니다.');
  }
};

export const getContainerList = async (id: string) => {
  return await instance.get(`/deploy/all?project_id=${id}`);
};
