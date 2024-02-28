import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { toast } from 'react-toastify';
import { theme } from '@merge/design-system';
import { FavoriteProjects } from '../components/Main/FavoriteProject';
import { LatestProject } from '../components/Main/LatestProject';
import { getProjects } from '../apis/project';
import BannerImg from '../assets/banner.png';
import TopPageButtonImg from '../assets/topPageButton.svg';
import { ProjectType } from '../types/projectType';

export const Main = () => {
  const [projects, setProjects] = useState<ProjectType[]>();

  const wrapper = useRef<HTMLImageElement>(null);

  const scrollToTop = () => {
    if (wrapper.current) {
      wrapper.current.scroll({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    getProjects()
      .then((res) => setProjects(res.data))
      .catch((err) => toast.error(err.response.data.message));
  }, []);

  return (
    <Wrapper ref={wrapper}>
      <Banner src={BannerImg} />
      <Title marginTop="">즐겨찾는 프로젝트</Title>
      <FavoriteProjectContainer>
        <FavoriteProjects />
      </FavoriteProjectContainer>
      <Title marginTop="56px">최근 등록 된 프로젝트</Title>
      <LatestProjectContainer>{projects && <LatestProject projects={projects} />}</LatestProjectContainer>
      <TopPageButton onClick={scrollToTop}>
        <img src={TopPageButtonImg} />
      </TopPageButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`;

const Banner = styled.img`
  width: 1128px;
  height: 240px;
  margin: 65px 0px 36px 0px;
`;

const Title = styled.div<{ marginTop: string }>`
  display: flex;
  margin-top: ${(props) => props.marginTop || '0px'};
  ${theme.font.subTitle2};
  width: 1128px;
  justify-content: flex-start;
`;

const FavoriteProjectContainer = styled.div`
  width: 740px;
`;

const LatestProjectContainer = styled.div`
  width: 1128px;
  display: flex;
  margin-bottom: 100px;
`;

const TopPageButton = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 106px;
  right: 298px;
  border: 1px solid ${theme.color.primary100};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
