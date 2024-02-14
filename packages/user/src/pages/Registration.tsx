import { ChangeEvent, useState, ReactElement, useEffect } from 'react';
import styled from '@emotion/styled';
import { SubHeader } from '../components/Registration/SubHeader';
import { Progress } from '../components/Registration/Progress';
import {
  RegisterFormFirst,
  RegisterFormSecond,
  RegisterFormThird,
  // RegisterFormForth,
} from '../components/Registration/FormRegister';
import { DeployFormFirst, DeployFormSecond, DeployFormThird } from '../components/Registration/FormDeploy';
import { deployType, projectType } from '../types/projectType';
import { dataWhiteSpace } from '../func/dataWhiteSpace';
// import { createProject } from '../apis/project';
import { instance } from '../apis/axios';
import { handleImageChange } from '../func/handleImageChange';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { deploy } from '../apis/deploy';

// type pageKindType = 'register' | 'deploy';

export const Registration = () => {
  const { pathname } = useLocation();

  const [progress, setProgress] = useState<number>(0);
  const [nowProgress, setNowProgress] = useState<number>(0);

  const [logo, setLogo] = useState<Blob | null>(null);
  const [projectData, setProjectData] = useState<projectType>({
    project_name_ko: '',
    project_name_en: '',
    team_name_en: '',
    description: '',
    github_url: '',
    web_url: '',
    play_store_url: '',
    app_store_url: '',
  });
  const [projectImage, setProjectImage] = useState<Blob | null>(null);

  const [deployData, setDeployData] = useState<deployType>({
    container_name: '',
    service_type: '',
    github_url: '',
    redis: false,
    mysql: false,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProjectData({
      ...projectData,
      [name]: value,
    });
  };

  const onChange2 = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDeployData({
      ...deployData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (pathname === '/deploy') return;

    const {
      project_name_ko,
      project_name_en,
      team_name_en,
      description,
      github_url,
      web_url,
      play_store_url,
      app_store_url,
    } = projectData;

    if (logo) {
      setProgress(1);
      if (dataWhiteSpace({ project_name_ko, project_name_en, team_name_en, description }) && projectImage) {
        setProgress(2);
        if (dataWhiteSpace({ github_url, web_url, play_store_url, app_store_url })) {
          setProgress(3);
        }
      }
    }
  }, [logo, projectData, projectImage]);

  useEffect(() => {
    if (pathname !== '/deploy') return;

    const { container_name, github_url, service_type } = deployData;

    if (container_name && github_url) {
      setProgress(1);
      if (service_type) {
        setProgress(2);
      }
    }
  }, [deployData]);

  const registerFormArray: ReactElement[] = [
    <RegisterFormFirst
      logo={logo}
      projectImage={projectImage}
      onImageChange={(event: ChangeEvent<HTMLInputElement>) => handleImageChange(event, setLogo)}
      onChange={onChange}
      value={projectData}
    />,
    <RegisterFormSecond
      logo={logo}
      projectImage={projectImage}
      onImageChange={(event: ChangeEvent<HTMLInputElement>) => handleImageChange(event, setProjectImage)}
      onChange={onChange}
      value={projectData}
    />,
    <RegisterFormThird
      logo={logo}
      projectImage={projectImage}
      onImageChange={(event: ChangeEvent<HTMLInputElement>) => handleImageChange(event, setLogo)}
      onChange={onChange}
      value={projectData}
    />,
    // <RegisterFormForth value={projectData} />,
  ];

  const deployFormArray: ReactElement[] = [
    <DeployFormFirst value={deployData} onChange={onChange2} setDeployData={setDeployData} />,
    <DeployFormSecond value={deployData} onChange={onChange2} setDeployData={setDeployData} />,
    <DeployFormThird />,
  ];

  const onSubmit = () => {
    if (pathname !== '/deploy' && logo && projectImage) {
      const formData = new FormData();
      formData.append('project', JSON.stringify(projectData));
      formData.append('logo', logo);
      formData.append('projectImage', projectImage);

      instance
        .post('/project', formData)
        .then(() => (window.location.href = 'my'))
        .catch(() => toast.error('오류'));
    } else if (pathname === '/deploy' && progress >= 2) {
      deploy(deployData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast.error('Submit Error');
    }
  };

  return (
    <Wrapper>
      <SubHeader path={pathname} />
      <Container>
        <Progress progress={progress} onClick={setNowProgress} func={onSubmit} path={pathname} />
        {pathname === '/register' ? registerFormArray[nowProgress] : deployFormArray[nowProgress]}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: calc(100vh - 52px);
  background-color: #f4f4f4;
`;

const Container = styled.div`
  height: calc(100% - 80px);
  padding: 40px 0 0 0;
  overflow: auto;
  display: flex;
  justify-content: center;
  gap: 40px;
`;
