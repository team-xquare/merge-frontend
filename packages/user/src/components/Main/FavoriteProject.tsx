import styled from '@emotion/styled';
import dmsLogoImg from '../../assets/logos/DMS.svg';
import entryLogoImg from '../../assets/logos/Entry.svg';
import PickImg from "../../assets/logos/Pick.svg";
import { theme } from '@merge/design-system';
import { Link } from 'react-router-dom';

type projectsType = {
  name: string;
  logo: string;
  address: string;
};

const projects: projectsType[] = [
  {
    name: 'Entry',
    logo: entryLogoImg,
    address: '',
  },
  {
    name: 'DMS',
    logo: dmsLogoImg,
    address: '',
  },
  {
    name: 'pick',
    logo: PickImg,
    address: '',
  },
  {
    name: 'Repo',
    logo: dmsLogoImg,
    address: '',
  },
  {
    name: 'Jobis',
    logo: entryLogoImg,
    address: '',
  },
  {
    name: 'OSJ',
    logo: dmsLogoImg,
    address: '',
  },
];

export const FavoriteProjects = () => {
  return (
    <>
      <FlexContainer>
        {projects.map((project, index) => {
          return (
            <ProjectContainer to={project.address} key={index}>
              <BorderLine>
                <Project src={project.logo}></Project>
              </BorderLine>
              <div>{project.name}</div>
            </ProjectContainer>
          );
        })}
      </FlexContainer>
    </>
  );
};

const FlexContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 52px;
`;

const Project = styled.img`
  width: 80px;
  height: 80px;
`;

const ProjectContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${theme.color.gray800};
  ${theme.font.subTitle2};
  text-decoration: none;
`;

const BorderLine = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid ${theme.color.gray100};
  border-radius: 28px;
  overflow: hidden;
`;
