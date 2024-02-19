import styled from '@emotion/styled';
import { DeployContainter } from '../components/DeployContainter';
import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getDetailProject } from '../apis/project';
import { theme, Button } from '@merge/design-system';
import { getContainerList } from '../apis/deploy';

type dataType = {
  id: string;
  logo: string;
  student_name: string;
  team_name_en: string;
  project_name_ko: string;
  project_name_en: string;
  description: string;
  app_store_url: string;
  play_store_url: string;
  github_url: string;
  web_url: string;
  project_image: string[] | null;
  is_managed_by_me: Boolean;
};

type containerType = {
  container_name: string;
  repository: string;
  last_deploy: string;
  url: string;
};

export const Project = () => {
  const { id } = useParams();
  const link = useNavigate();
  const [data, setData] = useState<dataType>();
  const [containers, setContainers] = useState<containerType[]>();

  useEffect(() => {
    if (!id) return;

    getDetailProject(id)
      .then((res) => {
        setData(res.data);
        if (res.data.is_managed_by_me) {
          getContainerList(res.data.id)
            .then((res) => {
              setContainers([...res.data.deploy_list]);
            })
            .catch((err) => console.log(err));
        }
      })
      .catch(() => (window.location.href = '/'));
  }, []);

  return (
    <Wrapper>
      {data && (
        <>
          <TopContainer>
            <Logo src={data.logo} />
            <div>
              <Date>2007-03-19</Date>
              <Name>{data.project_name_ko}</Name>
              <TeamName>{data.team_name_en}</TeamName>
            </div>
          </TopContainer>
          <Description>
            <span>프로젝트 내용</span>
            {data.description}
          </Description>
          <LinkBox>
            <div>배포 링크</div>
            <div>
              <span>웹 주소</span>
              <a href={data.web_url}>{data.web_url}</a>
            </div>
            <div>
              <span>플레이 스토어</span>
              <a href={data.play_store_url}>{data.play_store_url}</a>
            </div>
            <div>
              <span>앱 스토어</span>
              <a href={data.app_store_url}>{data.app_store_url}</a>
            </div>
          </LinkBox>
          {containers && (
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
          )}
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
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
`;

const Name = styled.div`
  ${theme.font.heading4};
  color: ${theme.color.gray900};
  margin: 6px 0;
`;

const TeamName = styled.div`
  ${theme.font.heading5};
  color: ${theme.color.gray600};
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
`;

const ContainerWrapper = styled.div`
  width: 668px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 44px;
`;

const ContainerTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${theme.font.subTitle2};
  color: ${theme.color.gray800};
`;
