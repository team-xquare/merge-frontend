import styled from '@emotion/styled';
import { theme } from '@merge/design-system';

export const Logo = () => {
  return (
    <Wrapper>
      Merge
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.color.primary500};
  font-weight: 700;
  font-size: 24px;
  gap: 8px;
`;
