import React from 'react';
import styled from '@emotion/styled';
import { theme, Button } from '@merge/design-system';
import CheckImg from '../../assets/check.svg';
import LineImg from '../../assets/line.svg';

type progressStateType = 'success' | 'now' | 'disable';

type ProgressStateProps = {
  state: progressStateType;
  level?: string;
};

const ProgressLevel = ({ state, level }: ProgressStateProps) => {
  return (
    <ProgressLevelWrapper>
      <Icon state={state}>
        <img src={CheckImg} />
      </Icon>
      <LevelText>{level}</LevelText>
    </ProgressLevelWrapper>
  );
};

export const Progress = ({ progress, levels }: { progress: number; levels: string[] }) => {
  return (
    <Wrapper>
      <div>
        <Text>프로젝트 등록</Text>
        <Container>
          {levels.map((level, index) => {
            return (
              <React.Fragment key={index}>
                <ProgressLevel
                  state={index === progress ? 'now' : index < progress ? 'success' : 'disable'}
                  level={level}
                />
                {index !== levels.length - 1 && (
                  <LineBox>
                    <Line src={LineImg} />
                  </LineBox>
                )}
              </React.Fragment>
            );
          })}
        </Container>
      </div>
      <ButtonContainer>
        <Button buttonStyle="solid" size="medium">
          등록하기
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 260px;
  height: 458px;
  padding: 48px 0 48px 28px;
  border-radius: 12px;
  background-color: ${theme.color.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Text = styled.div`
  color: ${theme.color.gray900};
  ${theme.font.heading6};
  margin-bottom: 28px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  width: 204px;
`;

const ProgressLevelWrapper = styled.div`
  height: 20px;
  display: flex;
  gap: 20px;
  align-items: center;
`;

const LevelText = styled.div`
  ${theme.font.subTitle2};
  color: ${theme.color.gray900};
`;

const Icon = styled.div<ProgressStateProps>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ state }) =>
    state === 'success' ? theme.color.primaryA400 : state === 'now' ? theme.color.gray600 : theme.color.gray300};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LineBox = styled.div`
  width: 20px;
  display: flex;
  justify-content: center;
  margin: 3px 0;
`;

const Line = styled.img`
  width: 2px;
`;
