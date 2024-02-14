import { FavoriteProjects } from '../components/Main/FavoriteProject';
import { LatestProject } from '../components/Main/LatestProject';
import { theme } from '@merge/design-system';
import styled from '@emotion/styled';
import BannerImg from '../assets/banner.png';
import TopPageButtonImg from '../assets/topPageButton.svg';

export const Main = () => {
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };
  return (
    <Container>
      <Banner src={BannerImg} />
      <Title marginTop="">즐겨찾는 프로젝트</Title>
      <FavoriteProjectContainer>
        <FavoriteProjects />
      </FavoriteProjectContainer>
      <Title marginTop="56px">최근 등록 된 프로젝트</Title>
      <LatestProjectContainer>
        <LatestProject />
      </LatestProjectContainer>
      <TopPageButton onClick={scrollToTop} />
    </Container>
  );
};

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

const Container = styled.div`
  /* width: 100vw; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;

const LatestProjectContainer = styled.div`
  width: 1128px;
  display: flex;
  margin-bottom: 100px;
`;

const TopPageButton = styled.div`
  position: fixed;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  top: 85%;
  left: 81%;
  border: 1px solid ${theme.color.primary100};
  background-image: url(${TopPageButtonImg});
  background-repeat: no-repeat;
  background-position: center center;

  &:hover {
    cursor: pointer;
  }
`;
