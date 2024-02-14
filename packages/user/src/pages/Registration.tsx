import { ChangeEvent, useState, ReactElement, useEffect } from 'react';
import styled from '@emotion/styled';
import { SubHeader } from '../components/Registration/SubHeader';
import { Progress } from '../components/Registration/Progress';
import {
  RegisterFormFirst,
  RegisterFormSecond,
  RegisterFormThird,
  // RegisterFormForth,
} from '../components/Registration/Form';
import { projectType } from '../types/projectType';
import { dataWhiteSpace } from '../func/dataWhiteSpace';
// import { createProject } from '../apis/project';
import { instance } from '../apis/axios';
import { handleImageChange } from '../func/handleImageChange';

// type pageKindType = 'register' | 'deploy';

export const Registration = () => {
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

  const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProjectData({
      ...projectData,
      [name]: value,
    });
  };

  useEffect(() => {
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
      onImageChange={(event: ChangeEvent<HTMLInputElement>) => handleImageChange(event, setLogo)}
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

  const onSubmit = () => {
    if (!(logo && projectImage)) return;

    const formData = new FormData();
    formData.append('project', JSON.stringify(projectData));
    formData.append('logo', logo);
    formData.append('projectImage', projectImage);

    instance
      .post('/project', formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Wrapper>
      <SubHeader />
      <Container>
        <Progress progress={progress} kind={'register'} onClick={setNowProgress} func={onSubmit} />
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
