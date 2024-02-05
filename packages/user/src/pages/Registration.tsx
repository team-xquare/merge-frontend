import styled from '@emotion/styled';
import { SubHeader } from '../components/Registration/SubHeader';
import { Progress } from '../components/Registration/Progress';

export const Registration = () => {
  return (
    <Wrapper>
      <SubHeader />
      <Container>
        <Progress />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: calc(100vh - 52px);
  background-color: #f4f4f4;
`;

const Container = styled.div`
  height: calc(100% - 80px);
  padding: 40px 371px 0 280px;
  overflow: auto;
`;
