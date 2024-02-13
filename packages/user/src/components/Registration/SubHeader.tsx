import styled from '@emotion/styled';
import { theme } from '@merge/design-system';

export const SubHeader = () => {
  return (
    <Wrapper>
      <Heading>프로젝트 등록하기</Heading>
      {/* <Button>임시 저장하기</Button> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.color.primary600};
`;

const Heading = styled.div`
  ${theme.font.heading4};
  color: ${theme.color.white};
`;

const Button = styled.div`
  width: 126px;
  height: 40px;
  border-radius: 4px;
  ${theme.font.buttonSmall};
  color: ${theme.color.primary600};
  background-color: ${theme.color.white};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
