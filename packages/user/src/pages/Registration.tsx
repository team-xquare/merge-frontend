import { useState, ReactElement } from 'react';
import styled from '@emotion/styled';
import { SubHeader } from '../components/Registration/SubHeader';
import { Progress } from '../components/Registration/Progress';
import {
  RegisterFormFirst,
  RegisterFormSecond,
  RegisterFormThird,
  RegisterFormForth,
} from '../components/Registration/Form';

const registerFormArray: ReactElement[] = [
  <RegisterFormFirst />,
  <RegisterFormSecond />,
  <RegisterFormThird />,
  <RegisterFormForth />,
];

type pageKindType = 'register' | 'deploy';

export const Registration = () => {
  const [progress, setProgress] = useState<number>(1);
  const [nowProgress, setNowProgress] = useState<number>(0);

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
