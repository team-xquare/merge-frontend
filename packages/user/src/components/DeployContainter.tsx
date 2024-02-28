import { theme } from '@merge/design-system';
import styled from '@emotion/styled';
import React from 'react';

type containerType = {
  container_name: string;
  repository: string;
  last_deploy: string;
  url: string;
};

export const DeployContainter = ({ container_name, repository, last_deploy }: containerType) => {
  return (
    <Wrapper>
      <Name>{container_name}</Name>
      <Info>
        <span>레포지토리&nbsp;&nbsp;</span>
        {repository}
      </Info>
      <Info>
        <span>최종 배포일&nbsp;&nbsp;</span>
        {last_deploy}
      </Info>
      <Info>
        <span>URL&nbsp;&nbsp;</span>
        {/* {url} */}
      </Info>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 668px;
  height: 216px;
  border-radius: 8px;
  background-color: ${theme.color.gray50};
  padding: 20px;
`;

const Name = styled.div`
  ${theme.font.subTitle1};
  color: ${theme.color.gray900};
`;

const Info = styled.div`
  margin-top: 20px;
  color: ${theme.color.gray900};
  ${theme.font.body1};
  span {
    ${theme.font.subTitle2};
    color: ${theme.color.gray700};
  }
`;
