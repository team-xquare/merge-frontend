import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@merge/design-system';

export const Menu = ({ isLogin }: { isLogin: boolean }) => {
  const link = useNavigate();

  const onSignIn = () => {
    link('/signin');
  };

  const onRegister = () => {
    link('/register');
  };

  return (
    <Wrapper>
      {isLogin ? (
        <>
          <Profile to={'/my'} />
          <Button buttonStyle="solid" size="extraSmall" onClick={onRegister}>
            프로젝트 등록하기
          </Button>
        </>
      ) : (
        <Button buttonStyle="solid" size="extraSmall" onClick={onSignIn}>
          로그인
        </Button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  height: 32px;
`;

const Profile = styled(Link)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: gray;
  cursor: pointer;
`;
