import styled from '@emotion/styled';
import { theme } from '@merge/design-system';
import { Link } from 'react-router-dom';

type projectsType = {
  id: string;
  project_name: string;
  team_name_en: string;
  logo: string;
};

export const LatestProject = ({ projects }: { projects: projectsType[] }) => {
  return (
    <LatestProjectContainer>
      {projects.map((project, index) => {
        return (
          <FlexContainer key={index} to={`project/${project.id}`}>
            <ProjectImg src={project.logo} />
            <NameContainer>
              <ProjectName>{project.project_name}</ProjectName>
              <TeamName>{project.team_name_en}</TeamName>
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
  width: 200px;
  height: 200px;
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
  color: ${theme.color.gray800};
`;

const TeamName = styled.div`
  ${theme.font.body1};
  color: ${theme.color.primary400};
`;
