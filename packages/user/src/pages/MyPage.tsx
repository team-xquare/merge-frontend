import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { theme, Button, Input } from '@merge/design-system';
import { getMyProject } from '../apis/project';
import { getUserInfo, putUserUpdate } from '../apis/user';
import { toast } from 'react-toastify';
import { useModal } from '../hooks/useModal';
import DotsImg from '../assets/dots.svg';
import UpdateImg from '../assets/update.svg';
import { Link } from 'react-router-dom';
import { hideProject, unhideProject } from '../apis/project';

type userType = {
  student_name: string;
  school_gcn: number;
  github: string;
  email: string;
  account_id: string;
};

type projectType = {
  project_name: string;
  team_name_en: string;
  id: string;
  logo: string;
  date: string;
  is_hidden: boolean;
};

export const MyPage = () => {
  const { visible, ModalWrapper, show, close } = useModal();
  const [userInfo, setUserInfo] = useState<userType>();
  const [projects, setProjects] = useState<projectType[] | null>();
  const [select, setSelect] = useState<string>('');
  const [seeHide, setSeeHide] = useState<boolean>(false);
  const [link, setLink] = useState<string>('');

  const onMenu = (project: string) => {
    show('management');
    setSelect(project);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };

  const onHide = () => {
    if (!seeHide) {
      hideProject(select)
        .then(() => window.location.reload())
        .catch(() => toast.error('프로젝트 숨기기를 실패했습니다.'));
    } else {
      unhideProject(select)
        .then(() => window.location.reload())
        .catch(() => toast.error('프로젝트 숨기기 해제를 실패했습니다.'));
    }
  };

  const onUpdate = () => {
    putUserUpdate(link)
      .then(() => window.location.reload())
      .catch(() => toast.error('정보 수정에 실패했습니다.'));
  };

  useEffect(() => {
    getUserInfo()
      .then((res) => {
        const data: userType = res.data;

        setUserInfo({
          student_name: data.student_name,
          school_gcn: data.school_gcn,
          github: data.github,
          email: data.email,
          account_id: data.account_id,
        });
        setLink(data.github);
      })
      .catch(() => {
        toast.error('유저 정보를 불러오는데 실패했습니다.');
      });
  }, []);

  useEffect(() => {
    if (userInfo && visible !== 'update') setLink(userInfo.github);
  }, [visible]);

  useEffect(() => {
    if (!userInfo) return;

    getMyProject(userInfo.email)
      .then((res) => {
        setProjects(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }, [userInfo]);

  return (
    <>
      {visible === 'management' && (
        <ModalWrapper>
          <ModalChildWrapper>
            <ModalButton
              onClick={() => {
                show('secret');
              }}
            >
              Secret key 발급
            </ModalButton>
            <ModalButton onClick={onHide}>{seeHide ? '숨김 해제' : '숨김'}</ModalButton>
            {/* <ModalButton>
              <Link to={`/project/${select}`}>관리</Link>
            </ModalButton> */}
          </ModalChildWrapper>
        </ModalWrapper>
      )}
      {visible === 'update' && (
        <ModalWrapper>
          <ModalUpdateWrapper>
            <div>
              <span>깃허브 링크 수정</span>
              <span>마이페이지에서 수정할 수 있습니다.</span>
            </div>
            <Input width={400} label="링크" value={link} onChange={onChange} />
            <div>
              <div onClick={onUpdate}>확인</div>
              <div onClick={close}>취소</div>
            </div>
          </ModalUpdateWrapper>
        </ModalWrapper>
      )}
      {visible === 'secret' && <ModalWrapper>hello</ModalWrapper>}
      <Wrapper>
        {!seeHide && userInfo && (
          <Header>
            <div>
              {userInfo.school_gcn}
              <span>
                {userInfo.student_name} ({userInfo.account_id})
              </span>
            </div>
            <div>
              <a href={userInfo.github}>{userInfo.github}</a>
              <img
                src={UpdateImg}
                onClick={() => {
                  show('update');
                }}
              />
            </div>
          </Header>
        )}
        {seeHide && <HideText>숨긴 프로젝트</HideText>}
        <Container>
          {projects &&
            !seeHide &&
            projects.map((element, index) => {
              if (element.is_hidden) return;
              return (
                <Project key={index}>
                  <Link to={`/project/${element.id}`}>
                    <img src={element.logo} />
                  </Link>
                  <div>
                    {/* {element.admin && <Badge>관리자</Badge>} */}
                    <div className="first">{element.project_name}</div>
                    <div className="second">{element.team_name_en}</div>
                    <div className="third">{element.date}</div>
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

          {projects &&
            seeHide &&
            projects.map((element, index) => {
              if (!element.is_hidden) return;
              return (
                <Project key={index}>
                  <Link to={`/project/${element.id}`}>
                    <img src={element.logo} />
                  </Link>
                  <div>
                    {/* {element.admin && <Badge>관리자</Badge>} */}
                    <div className="first">{element.project_name}</div>
                    <div className="second">{element.team_name_en}</div>
                    <div className="third">{element.date}</div>
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
        <ButtonContainer>
          <Button
            onClick={() => {
              setSeeHide(!seeHide);
            }}
            buttonStyle="solid"
            size="extraSmall"
          >
            {seeHide ? '안 숨긴' : '숨긴'} 프로젝트 보기
          </Button>
        </ButtonContainer>
      </Wrapper>
    </>
  );
};

const HideText = styled.div`
  width: 1128px;
  display: flex;
  justify-content: start;
  ${theme.font.heading4};
  margin-top: 66px;
  height: 70px;
  align-items: center;
`;

const Wrapper = styled.div`
  height: calc(100vh - 52px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  flex: none;
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
  & > div:nth-child(1) {
    color: ${theme.color.primary800};
    span {
      color: ${theme.color.gray800};
      margin-left: 20px;
    }
  }
  & > div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    & > a {
      text-decoration: none;
      color: ${theme.color.link800};
    }
    & > img {
      cursor: pointer;
    }
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
  > a {
    width: 160px;
    height: 160px;
    border-radius: 4px;
    > img {
      width: 160px;
      height: 160px;
      border-radius: 4px;
    }
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

const ButtonContainer = styled.div`
  position: absolute;
  right: 36px;
  bottom: 72px;
  text-decoration: none;
`;

const ModalUpdateWrapper = styled.div`
  width: 440px;
  height: 236px;
  border-radius: 8px;
  background-color: ${theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  & > div:first-child {
    margin: 36px 0 16px 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    color: ${theme.color.gray900};
    ${theme.font.subTitle2};
    & > span:last-child {
      color: ${theme.color.gray600};
      font-size: 12px;
      font-weight: 500;
    }
  }
  & > div:last-child {
    margin-top: 23px;
    display: flex;
    justify-content: center;
    div {
      ${theme.font.buttonSmall};
      display: flex;
      justify-content: center;
      align-items: center;
      width: 220px;
      height: 44px;
      border-color: ${theme.color.gray200};
      border-style: solid;
      cursor: pointer;
    }
    & > div:first-child {
      border-width: 1px 1px 0 0;
      color: ${theme.color.gray800};
    }
    & > div:last-child {
      border-width: 1px 0 0 0;
      color: ${theme.color.danger500};
    }
  }
`;
