import styled from '@emotion/styled';
import LogoImg from '../../assets/logo.svg';
import { theme } from '@merge/design-system';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Wrapper to={'/'}>
      <img src={LogoImg} />
      Merge
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  color: ${theme.color.primary500};
  font-weight: 700;
  font-size: 24px;
  gap: 8px;
  text-decoration: none;
`;
