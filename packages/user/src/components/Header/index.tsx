import styled from '@emotion/styled';
import { theme } from '@merge/design-system';
import { Logo } from './Logo';
import { Menu } from './Menu';

export const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <Menu isLogin={true} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 52px;
  padding: 10px 280px;
  border-bottom: 1px solid ${theme.color.gray200};
  display: flex;
  justify-content: space-between;
`;
