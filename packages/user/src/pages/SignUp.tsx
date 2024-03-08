import styled from '@emotion/styled';
import SignImg from '../assets/sign.svg';
import { theme } from '@merge/design-system';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signupType } from '../types/signType';
import { signUp } from '../apis/sign';
import { SignupFormFirst, SignupFormSecond, SignupFormThird } from '../components/Signup/index';
import { toast } from 'react-toastify';

export const SignUp = () => {
  const [data, setData] = useState<signupType>({
    student_name: '',
    github: '',
    password: '',
    school_gcn: '',
    email: '',
    account_id: '',
    okPassword: '',
  });

  const [progress, setProgress] = useState<number>(1);

  const { student_name, github, password, school_gcn, email, account_id, okPassword } = data;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onNext = () => {
    if (progress !== 3) {
      setProgress(progress + 1);
      return;
    }

    signUp(data)
      .then(() => {
        toast.success('회원가입에 성공하셨습니다.');
        window.location.href = '/signin';
      })
      .catch(() => toast.error('회원가입에 실패하셨습니다.'));
  };

  return (
    <Wrapper>
      <Container1>
        <img
          src={SignImg}
          onClick={() => {
            console.log(data);
          }}
        />
      </Container1>
      <Container2>
        <Title>
          <strong>Sign Up</strong>
          <div>
            이미 계정이 있다면? <_Link to="/signin">로그인</_Link>
          </div>
        </Title>
        <Progress>
          <span>{progress}</span>/3
        </Progress>
        {progress === 1 && <SignupFormFirst onChange={onChange} value={[student_name, school_gcn]} onNext={onNext} />}
        {progress === 2 && <SignupFormSecond onChange={onChange} value={[email, account_id, github]} onNext={onNext} />}
        {progress === 3 && okPassword && (
          <SignupFormThird onChange={onChange} value={[password, okPassword]} onNext={onNext} />
        )}
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

const _Link = styled(Link)`
  color: ${theme.color.primaryA200};
  text-decoration: none;
`;
