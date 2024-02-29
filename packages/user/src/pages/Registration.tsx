import { ChangeEvent, useState, ReactElement, useEffect } from 'react';
import styled from '@emotion/styled';
import { SubHeader } from '../components/Registration/SubHeader';
import { Progress } from '../components/Registration/Progress';
import { RegisterFormFirst, RegisterFormSecond, RegisterFormThird } from '../components/Registration/FormRegister';
import { ProjectRegisterType } from '../types/projectType';
import { dataWhiteSpace } from '../func/dataWhiteSpace';
import { instance } from '../apis/instance';
import { handleImageChange, handleImagesChange } from '../func/handleImageChange';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';

export const Registration = () => {
  const pathname: string = '/' + useLocation().pathname.split('/')[1];

  const [progress, setProgress] = useState<number>(0);
  const [nowProgress, setNowProgress] = useState<number>(0);

  const [logo, setLogo] = useState<Blob | null>(null);
  const [projectData, setProjectData] = useState<ProjectRegisterType>({
    project_name: '',
    project_name_en: '',
    team_name_en: '',
    description: '',
    github_url: '',
    web_url: '',
    play_store_url: '',
    app_store_url: '',
  });
  const [projectImage, setProjectImage] = useState<Blob[] | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProjectData({
      ...projectData,
      [name]: value,
    });
  };

  const onDeleteProjectImg = (num: number) => {
    const newArr: Blob[] | undefined = projectImage?.filter((_, index) => num !== index);

    if (newArr === undefined) {
      setProjectImage(null);
    } else {
      setProjectImage(newArr);
    }
  };

  useEffect(() => {
    if (pathname === '/deploy') return;

    const { project_name, project_name_en, team_name_en, description } = projectData;

    if (logo) {
      setProgress(1);
      if (dataWhiteSpace({ project_name, project_name_en, team_name_en, description })) {
        setProgress(3);
      }
    }
  }, [logo, projectData, projectImage]);

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
      onImageChange={(event: ChangeEvent<HTMLInputElement>) => handleImagesChange(event, projectImage, setProjectImage)}
      onChange={onChange}
      onDelete={onDeleteProjectImg}
      value={projectData}
    />,
    <RegisterFormThird
      logo={logo}
      projectImage={projectImage}
      onImageChange={(event: ChangeEvent<HTMLInputElement>) => handleImageChange(event, setLogo)}
      onChange={onChange}
      value={projectData}
    />,
  ];

  const onSubmit = () => {
    if (pathname !== '/deploy' && logo) {
      console.log(projectData);

      const formData = new FormData();
      formData.append('project', JSON.stringify(projectData));
      formData.append('logo', logo);
      if (projectImage) {
        projectImage.forEach((element: Blob) => {
          formData.append('projectImage', element);
        });
      }

      instance
        .post('/project', formData)
        .then(() => (window.location.href = 'my'))
        .catch((err) => {
          console.log(err);
          toast.error('오류');
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
        {registerFormArray[nowProgress]}
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
