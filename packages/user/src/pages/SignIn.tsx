import styled from '@emotion/styled';
import SignImg from '../assets/sign.svg';
import { theme, Input, Button } from '@merge/design-system';
import { useState } from 'react';

export const SignIn = () => {
  const [data, setData] = useState({ id: '', password: '' });

  const { id, password } = data;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onClick = () => {
    console.log(data);
  };

  const canSubmit = () => {
    if (id === '' || password === '') return true;
  };

  return (
    <Wrapper>
      <Container1>
        <img src={SignImg} />
      </Container1>
      <Container2>
        <Title>
          <strong>Log In</strong>
          <div>스퀘어 계정으로 로그인 해주세요.</div>
        </Title>
        <Input
          width={400}
          placeholder="아이디"
          margin={['top', 44]}
          type="text"
          name="id"
          onChange={onChange}
          value={id}
        />
        <Input
          width={400}
          placeholder="비밀번호"
          margin={['top', 48]}
          type="password"
          name="password"
          onChange={onChange}
          value={password}
        />
        <BtnContainer>
          <Button buttonStyle="solid" margin={['top', 52]} size="medium" onClick={onClick} isDisable={canSubmit()}>
            로그인
          </Button>
        </BtnContainer>
      </Container2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
`;

const Container1 = styled.div`
  width: 945px;
  height: calc(100vh - 52px);
  overflow: hidden;
`;

const Container2 = styled.div`
  width: calc(1920px - 945px);
  padding-top: 264px;
  padding-left: 258px;
`;

const Title = styled.div`
  strong {
    color: ${theme.color.primary500};
    ${theme.font.heading2}
  }
  color: ${theme.color.primary600};
  ${theme.font.subTitle3}
  div {
    margin-top: 6px;
  }
`;

const BtnContainer = styled.div`
  width: 400px;
  display: flex;
  justify-content: end;
`;
