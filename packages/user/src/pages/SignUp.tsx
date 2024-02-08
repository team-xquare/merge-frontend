import styled from '@emotion/styled';
import SignImg from '../assets/sign.svg';
import { theme, Input, Button } from '@merge/design-system';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signupType } from '../types/signType';
import { dataWhiteSpace } from '../func/dataWhiteSpace';
import { signUp } from '../apis/sign';

interface signupInputType extends signupType {
  okPassword: string;
}

export const SignUp = () => {
  const [data, setData] = useState<signupInputType>({
    student_name: '',
    github: '',
    password: '',
    school_gcn: '',
    email: '',
    account_id: '',
    okPassword: '',
  });

  const { student_name, github, password, school_gcn, email, account_id, okPassword } = data;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onClick = () => {
    signUp(data)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  const samePassword = () => {
    if (password === okPassword) return true;
  };

  const canSubmit = () => {
    if (dataWhiteSpace(data)) {
      return samePassword();
    }
  };

  return (
    <Wrapper>
      <Container1>
        <img src={SignImg} />
      </Container1>
      <Container2>
        <Title>
          <strong>Sign Up</strong>
          <div>
            이미 계정이 있다면? <_Link to="/signin">로그인</_Link>
          </div>
        </Title>
        <Progress>
          <span>1</span>/3
        </Progress>
        <Input
          width={400}
          label="이름"
          placeholder="이름"
          margin={['top', 44]}
          type="text"
          name="student_name"
          onChange={onChange}
          value={student_name}
        />
        <Input
          width={400}
          label="학번"
          placeholder="학번"
          margin={['top', 44]}
          type="text"
          name="school_gcn"
          onChange={onChange}
          value={school_gcn}
        />
        <Input
          width={400}
          label="이메일"
          placeholder="dsm 계정의 이메일"
          margin={['top', 44]}
          type="text"
          name="email"
          onChange={onChange}
          value={email}
        />
        <Input
          width={400}
          label="아이디"
          placeholder="아이디"
          margin={['top', 44]}
          type="text"
          name="account_id"
          onChange={onChange}
          value={account_id}
        />
        <Input
          width={400}
          label="깃허브 주소"
          placeholder="링크"
          margin={['top', 44]}
          type="text"
          name="github"
          onChange={onChange}
          value={github}
        />
        <Input
          width={400}
          label="비밀번호"
          placeholder="숫자, 특수 문자 1자 이상 영어 대소문자 포함 8~15자"
          margin={['top', 48]}
          type="password"
          name="password"
          onChange={onChange}
          value={password}
        />
        <Input
          width={400}
          label="비밀번호 확인"
          placeholder="한 번 더 입력해주세요"
          margin={['top', 48]}
          type="password"
          name="okPassword"
          onChange={onChange}
          value={okPassword}
        />
        <BtnContainer>
          <Button buttonStyle="solid" margin={['top', 52]} size="medium" onClick={onClick} isDisable={canSubmit()}>
            회원가입
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

const Progress = styled.div`
  margin-top: 4px;
  width: 400px;
  display: flex;
  justify-content: end;
  ${theme.font.heading6};
  color: ${theme.color.gray900};
  span {
    color: ${theme.color.primaryA400};
  }
`;

const BtnContainer = styled.div`
  width: 400px;
  display: flex;
  justify-content: end;
`;

const _Link = styled(Link)`
  color: ${theme.color.primaryA200};
  text-decoration: none;
`;
