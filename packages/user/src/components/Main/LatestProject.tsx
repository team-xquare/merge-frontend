import styled from '@emotion/styled';
import { theme } from '@merge/design-system';
import temporaryImg from '../../assets/temporary.svg';
import { Link } from 'react-router-dom';
import dmsLogoImg from '../../assets/logos/DMS.svg';
import OSJLogoImg from '../../assets/logos/OSJ.svg';

type projectsType = {
  name: string;
  team: string;
  picture: string;
  link: string;
};

const projects: projectsType[] = [
  {
    name: '정이라고 하자',
    team: '정민',
    picture: dmsLogoImg,
    link: '',
  },
  {
    name: '정이라고 하자',
    team: '정민',
    picture: OSJLogoImg,
    link: '',
  },
  {
    name: '정이라고 하자',
    team: '정민',
    picture: temporaryImg,
    link: '',
  },
  {
    name: '정이라고 하자',
    team: '정민',
    picture: temporaryImg,
    link: '',
  },
  {
    name: '정이라고 하자',
    team: '정민',
    picture: temporaryImg,
    link: '',
  },
  {
    name: '정이라고 하자',
    team: '정민',
    picture: temporaryImg,
    link: '',
  },
  {
    name: '정이라고 하자',
    team: '정민',
    picture: temporaryImg,
    link: '',
  },
  {
    name: '정이라고 하자',
    team: '정민',
    picture: temporaryImg,
    link: '',
  },
  {
    name: '정이라고 하자',
    team: '정민',
    picture: temporaryImg,
    link: '',
  },
  {
    name: '정이라고 하자',
    team: '정민',
    picture: temporaryImg,
    link: '',
  },
  {
    name: '정이라고 하자',
    team: '정민',
    picture: temporaryImg,
    link: '',
  },
  {
    name: '정이라고 하자',
    team: '정민',
    picture: temporaryImg,
    link: '',
  },
  {
    name: '정이라고 하자',
    team: '정민',
    picture: temporaryImg,
    link: '',
  },
];

export const LatestProject = () => {
  return (
    <LatestProjectContainer>
      {projects.map((project, index) => {
        return (
          <FlexContainer key={index} to={project.link}>
            <ProjectImg src={project.picture} />
            <NameContainer>
              <ProjectName>{project.name}</ProjectName>
              <TeamName>{project.team}</TeamName>
            </NameContainer>
          </FlexContainer>
        );
      })}
    </LatestProjectContainer>
  );
};

const FlexContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;

const LatestProjectContainer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: start;
  gap: 32px;
  flex-wrap: wrap;
  margin-bottom: 52px;
`;

const ProjectImg = styled.img`
  width: 200;
  height: 170px;
  margin-bottom: 4px;
  border: 1px solid ${theme.color.gray100};
  border-radius: 10px;
`;

const NameContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
`;

const ProjectName = styled.div`
  ${theme.font.subTitle2};
`;

const TeamName = styled.div`
  ${theme.font.body1};
`;
