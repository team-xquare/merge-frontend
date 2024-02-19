import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { theme } from '@merge/design-system';
import { getMyProject } from '../apis/project';
import { getUserInfo } from '../apis/user';
// import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useModal } from '../hooks/useModal';
import DotsImg from '../assets/dots.svg';
import { Link } from 'react-router-dom';

type userType = {
  student_name: string;
  school_gcn: number;
  github: string;
};

type projectType = {
  project_name_ko: string;
  team_name_en: string;
  id: string;
  logo: string;
};

export const MyPage = () => {
  const { visible, ModalWrapper, show } = useModal();
  const [userInfo, setUserInfo] = useState<userType>({
    student_name: '',
    school_gcn: 0,
    github: '',
  });
  const [projects, setProjects] = useState<projectType[] | null>();
  const [select, setSelect] = useState<string>('');

  const onMenu = (project: string) => {
    show();
    setSelect(project);
  };

  useEffect(() => {
    getUserInfo()
      .then((res) => {
        const data: userType = res.data;

        setUserInfo({ student_name: data.student_name, school_gcn: data.school_gcn, github: data.github });
      })
      .catch(() => {
        toast.error('유저 정보를 불러오는데 실패했습니다.');
      });

    getMyProject('dutexion@dsm.hs.kr')
      .then((res) => {
        setProjects(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {visible && (
        <ModalWrapper>
          <ModalChildWrapper>
            <ModalButton>숨김</ModalButton>
            <ModalButton>
              <Link to={`/project/${select}`}>관리</Link>
            </ModalButton>
          </ModalChildWrapper>
        </ModalWrapper>
      )}
      <Wrapper>
        <Header>
          <div>
            {userInfo.school_gcn}
            <span>{userInfo.student_name}</span>
          </div>
          <a href={userInfo.github}>{userInfo.github}</a>
        </Header>
        <Container>
          {projects &&
            projects.map((element, index) => {
              return (
                <Project key={index}>
                  <img src={element.logo} />
                  <div>
                    {/* {element.admin && <Badge>관리자</Badge>} */}
                    <div className="first">{element.project_name_ko}</div>
                    <div className="second">{element.team_name_en}</div>
                    {/* <div className="third">{element.}</div> */}
                    <Menu
                      src={DotsImg}
                      onClick={() => {
                        onMenu(element.id);
                      }}
                    />
                  </div>
                </Project>
              );
            })}
        </Container>
        {/* <ButtonContainer to={'/my/hide'}>
        <Button
          onClick={() => {
            console.log(13);
          }}
          buttonStyle="solid"
          size="extraSmall"
        >
          숨긴 프로젝트 보기
        </Button>
      </ButtonContainer> */}
      </Wrapper>
    </>
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
  > img {
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

const ModalChildWrapper = styled.div`
  width: 400px;
  height: 156px;
  border-radius: 8px;
  background-color: ${theme.color.white};
  overflow: hidden;
`;

const ModalButton = styled.div`
  width: 400px;
  height: 78px;
  border-bottom: 0.5px solid ${theme.color.gray200};
  display: flex;
  justify-content: center;
  align-items: center;
  ${theme.font.buttonLarge};
  color: ${theme.color.primary900};
  cursor: pointer;
  transition: 0.1s linear;
  & :last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.color.primary900};
    text-decoration: none;
  }
`;

// const Badge = styled.div`
//   position: absolute;
//   right: 0px;
//   top: 0;
//   width: 28px;
//   height: 28px;
//   background-color: ${theme.color.primaryA200};
//   font-size: 8px;
//   font-weight: 500;
//   letter-spacing: 0.008px;
//   border-radius: 50%;
//   color: ${theme.color.white};
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const Menu = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
`;

// const ButtonContainer = styled(Link)`
//   position: absolute;
//   right: 36px;
//   bottom: 72px;
//   text-decoration: none;
// `;
