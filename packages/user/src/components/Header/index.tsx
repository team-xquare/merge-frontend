import styled from '@emotion/styled';
import { theme } from '@merge/design-system';
import { Logo } from './Logo';
import { Menu } from './Menu';
import { Outlet } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <Wrapper>
        <Logo />
        <Menu isLogin={true} />
      </Wrapper>
      <Outlet />
    </>
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
