import styled from '@emotion/styled';
import { theme } from '@merge/design-system';

export const MyPage = () => {
  return (
    <Wrapper>
      <Header>
        <div>
          1학년 1반 1번
          <span>강해민</span>
        </div>
        <span>https://github.com/nimeahgnak</span>
      </Header>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 66px 396px 0 396px;
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
  & > span {
    color: ${theme.color.link800};
  }
`;
