import { ChangeEvent, useState, ReactElement, useEffect } from 'react';
import styled from '@emotion/styled';
import { toast } from 'react-toastify';
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

type pageKindType = 'register' | 'deploy';

export const Registration = () => {
  const [progress, setProgress] = useState<number>(0);
  const [nowProgress, setNowProgress] = useState<number>(0);

  const [logo, setLogo] = useState<File | null>(null);
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
  const [projectImage, setProjectImage] = useState<File[] | null>(null);

  const handleLogoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const file = files[0];
      const extension = file.name.split('.').pop()?.toLowerCase();

      const allowedExtensions = ['png', 'jpg', 'jpeg', 'gif', 'pdf', 'tiff', 'psd', 'bmp'];

      if (extension && allowedExtensions.includes(extension)) {
        setLogo(file);
      } else {
        toast.error('허용되지 않은 파일 형식입니다.');
      }
    }
  };

  const handleProjectImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    console.log(projectImage);

    if (files) {
      const validatedFiles = Array.from(files).filter((file) => {
        const extension = file.name.split('.').pop()?.toLowerCase();
        const allowedExtensions = ['png', 'jpg', 'jpeg', 'gif', 'pdf', 'tiff', 'psd', 'bmp'];
        return extension && allowedExtensions.includes(extension);
      });

      if (validatedFiles.length !== files.length) {
        toast.error('하나 이상의 파일이 허용되지 않은 형식입니다.');
      } else {
        setProjectImage(validatedFiles);
      }
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProjectData({
      ...projectData,
      [name]: value,
    });
  };

  const onAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      if (dataWhiteSpace({ project_name_ko, project_name_en, team_name_en, description })) {
        setProgress(2);
        if (dataWhiteSpace({ github_url, web_url, play_store_url, app_store_url })) {
          setProgress(3);
        }
      }
    }
  }, [logo, projectData, projectImage]);

  const registerFormArray: ReactElement[] = [
    <RegisterFormFirst logo={logo} func={handleLogoChange} />,
    <RegisterFormSecond
      value={projectData}
      projectImage={projectImage}
      func1={onChange}
      func2={onAreaChange}
      func3={handleProjectImageChange}
    />,
    <RegisterFormThird value={projectData} func={onChange} />,
    // <RegisterFormForth value={projectData} />,
  ];

  return (
    <Wrapper>
      <SubHeader />
      <Container>
        <Progress progress={progress} kind={'register'} onClick={setNowProgress} />
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
