import styled from '@emotion/styled';
import { Button, theme } from '@merge/design-system';
import dummyLogoImg from '../assets/logo.svg';
import { Link } from 'react-router-dom';

type projectType = {
  name: string;
  team: string;
  date: string;
  logo: string;
  admin: boolean;
};

const dummyProjects: projectType[] = [
  { name: '머지merge', team: '정', date: '2023-01-01', logo: dummyLogoImg, admin: true },
  { name: '머지merge', team: '정', date: '2023-01-01', logo: dummyLogoImg, admin: false },
];

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
              <div>
                {element.admin && <Badge>관리자</Badge>}
                <div className="first">{element.name}</div>
                <div className="second">{element.team}</div>
                <div className="third">{element.date}</div>
              </div>
            </Project>
          );
        })}
      </Container>
      <ButtonContainer to={'/my/hide'}>
        <Button
          onClick={() => {
            console.log(13);
          }}
          buttonStyle="solid"
          size="extraSmall"
        >
          숨긴 프로젝트 보기
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: calc(100vh - 52px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 1128px;
  height: 70px;
  padding: 0 40px;
  margin-top: 66px;
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
  > div {
    position: relative;
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
  }
`;

const Badge = styled.div`
  position: absolute;
  right: 0px;
  top: 0;
  width: 28px;
  height: 28px;
  background-color: ${theme.color.primaryA200};
  font-size: 8px;
  font-weight: 500;
  letter-spacing: 0.008px;
  border-radius: 50%;
  color: ${theme.color.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled(Link)`
  position: absolute;
  right: 36px;
  bottom: 72px;
  text-decoration: none;
`;
