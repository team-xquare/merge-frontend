import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDetailProject } from '../apis/project';
import { theme } from '@merge/design-system';
import ChevronImg from '../assets/chevron.svg';

type dataType = {
  id: string;
  logo: string;
  student_name: string;
  team_name_en: string;
  project_name: string;
  project_name_en: string;
  description: string;
  app_store_url: string;
  play_store_url: string;
  github_url: string;
  web_url: string;
  project_image: string[] | null;
  is_managed_by_me: Boolean;
};

// type containerType = {
//   container_name: string;
//   repository: string;
//   last_deploy: string;
//   url: string;
// };

export const Project = () => {
  const { id } = useParams();
  // const link = useNavigate();
  const [data, setData] = useState<dataType>();
  const [imgCount, setImgCount] = useState<number>(0);
  // const [containers, setContainers] = useState<containerType[]>();

  useEffect(() => {
    if (!id) return;

    getDetailProject(id)
      .then((res) => {
        setData(res.data);
        console.log(res);
      })
      .catch(() => (window.location.href = '/'));
  }, []);

  const onImgCountPlus = () => {
    if (data?.project_image) {
      if (imgCount < data.project_image.length - 1) {
        setImgCount((prev) => prev + 1);
      } else {
        setImgCount(0);
      }
    }
  };

  const onImgCountMinus = () => {
    if (data?.project_image) {
      if (imgCount > 0) {
        setImgCount((prev) => prev - 1);
      } else {
        setImgCount(data.project_image.length - 1);
      }
    }
  };

  return (
    <Wrapper>
      {data && (
        <>
          <TopContainer>
            <Logo src={data.logo} />
            <div>
              <Date>2007-03-19</Date>
              <Name>{data.project_name}</Name>
              <TeamName>{data.team_name_en}</TeamName>
            </div>
          </TopContainer>
          {data.project_image && data.project_image.length > 0 && (
            <ImgContainer>
              <div>
                <img src={ChevronImg} onClick={onImgCountMinus} />
                <ImgBox>
                  <img src={data.project_image[imgCount]} />
                </ImgBox>
                <img src={ChevronImg} style={{ transform: 'rotate(180deg)' }} onClick={onImgCountPlus} />
              </div>
              <ImgCountContainer>
                {data.project_image.map((_, index) => {
                  return <ImgCount selected={index === imgCount} />;
                })}
              </ImgCountContainer>
            </ImgContainer>
          )}
          <Description>
            <span>프로젝트 내용</span>
            {data.description?.split('\n').map((element) => {
              return (
                <>
                  {element}
                  <br />
                </>
              );
            })}
          </Description>
          <LinkBox>
            {(data.web_url || data.play_store_url || data.app_store_url) && <div>배포 링크</div>}
            {data.web_url && (
              <div>
                <span>웹 주소</span>
                <a href={data.web_url}>{data.web_url}</a>
              </div>
            )}
            {data.play_store_url && (
              <div>
                <span>플레이 스토어</span>
                <a href={data.play_store_url}>{data.play_store_url}</a>
              </div>
            )}
            {data.app_store_url && (
              <div>
                <span>앱 스토어</span>
                <a href={data.app_store_url}>{data.app_store_url}</a>
              </div>
            )}
          </LinkBox>
          {/* {containers && (
            <ContainerWrapper>
              <ContainerTop>
                <span>컨테이너</span>
                <Button
                  buttonStyle="solid"
                  size="extraSmall"
                  onClick={() => {
                    link(`/deploy/${data.id}`);
                  }}
                >
                  컨테이너 배포
                </Button>
              </ContainerTop>
              {containers.map((container, index) => {
                return (
                  <React.Fragment key={index}>
                    <DeployContainter
                      container_name={container.container_name}
                      repository={container.repository}
                      last_deploy={container.last_deploy}
                      url={container.url}
                    />
                  </React.Fragment>
                );
              })}
            </ContainerWrapper>
          )} */}
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 52px);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`;

const TopContainer = styled.div`
  width: 668px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 92px;
  > div {
    width: 518px;
  }
`;

const Logo = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 8px;
  border: 1px solid ${theme.color.gray200};
`;

const Date = styled.div`
  ${theme.font.subTitle2};
  color: ${theme.color.primary500};
  width: 100%;
  text-align: end;
`;

const Name = styled.div`
  ${theme.font.heading4};
  color: ${theme.color.gray900};
  margin: 6px 0;
  width: 100%;
  text-align: end;
`;

const TeamName = styled.div`
  ${theme.font.heading5};
  color: ${theme.color.gray600};
  width: 100%;
  text-align: end;
`;

const Description = styled.div`
  margin-top: 60px;
  width: 668px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  align-items: start;
  color: ${theme.color.gray800};
  span {
    ${theme.font.subTitle2};
    color: ${theme.color.gray900};
    display: block;
  }
`;

const LinkBox = styled.div`
  width: 668px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: start;
  ${theme.font.subTitle2};
  margin-top: 44px;
  div {
    display: flex;
    justify-content: center;
    gap: 16px;
  }
  a {
    ${theme.font.subTitle1};
    color: ${theme.color.link800};
    text-decoration: none;
  }
  margin-bottom: 100px;
`;

const ImgContainer = styled.div`
  width: 772px;
  height: 296px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  & > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > img {
      cursor: pointer;
    }
  }
`;

const ImgBox = styled.div`
  width: 668px;
  height: 280px;
  display: flex;
  overflow: hidden;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

const ImgCountContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  height: 8px;
  margin-top: 8px;
`;

const ImgCount = styled.div<{ selected: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ selected }) => (selected ? theme.color.primary400 : theme.color.primary50)};
`;
