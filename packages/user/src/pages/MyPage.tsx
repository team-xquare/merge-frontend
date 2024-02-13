import styled from '@emotion/styled';
import { theme } from '@merge/design-system';
import dummyLogoImg from '../assets/logo.svg';

type projectType = {
  name: string;
  team: string;
  date: string;
  logo: string;
};

const dummyProjects: projectType[] = [{ name: '머지merge', team: '정', date: '2023-01-01', logo: dummyLogoImg }];

export const MyPage = () => {
  return (
    <Wrapper>
      <Header>
        <div>
          1학년 1반 1번
          <span>강해민</span>
        </div>
        <a href="https://github.com/nimeahgnak">https://github.com/nimeahgnak</a>
      </Header>
      <Container>
        {dummyProjects.map((element, index) => {
          return (
            <Project key={index}>
              <img src="" />
              <div className="first">{element.name}</div>
              <div className="second">{element.team}</div>
              <div className="third">{element.date}</div>
            </Project>
          );
        })}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 66px 396px 0 396px;
  height: calc(100vh - 52px);
  overflow-y: auto;
`;

const Header = styled.div`
  width: 1128px;
  height: 70px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  background-color: ${theme.color.gray50};
  border-radius: 8px;
  ${theme.font.subTitle2};
  align-items: center;
  & > div {
    color: ${theme.color.primary800};
    span {
      color: ${theme.color.gray800};
      margin-left: 20px;
    }
  }
  & > a {
    text-decoration: none;
    color: ${theme.color.link800};
  }
`;

const Container = styled.div`
  width: 1128px;
  display: flex;
  justify-content: start;
  gap: 52px;
  flex-wrap: wrap;
  margin-top: 56px;
  margin-bottom: 60px;
`;

const Project = styled.div`
  width: 184px;
  height: 264px;
  background-color: white;
  border: 1px solid ${theme.color.gray100};
  padding: 12px;
  border-radius: 8px;
  img {
    width: 160px;
    height: 160px;
    border-radius: 4px;
  }
  & > .first {
    ${theme.font.subTitle2};
    color: ${theme.color.gray900};
  }
  & > .second {
    ${theme.font.subTitle3};
    color: ${theme.color.gray700};
    margin: 4px 0 8px 0;
  }
  & > .third {
    width: 58px;
    height: 22px;
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0.008px;
    color: ${theme.color.gray800};
    background-color: ${theme.color.gray100};
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
