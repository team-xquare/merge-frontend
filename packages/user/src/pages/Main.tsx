import { FavoriteProjects } from '../components/Main/FavoriteProject';
import { LatestProject } from '../components/Main/LatestProject';
import { theme } from '@merge/design-system';
import styled from '@emotion/styled';
import BannerImg from '../assets/banner.png';

export const Main = () => {
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
  width: 100vw;
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
