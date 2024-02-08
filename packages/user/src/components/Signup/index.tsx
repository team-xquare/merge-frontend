import React from 'react';
import styled from '@emotion/styled';
import { Input, Button } from '@merge/design-system';
import { dataWhiteSpace } from '../../func/dataWhiteSpace';

type formType = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string[];
  onNext: () => void;
};

const cantSubmit = (value: string[]) => {
  const data = { ...value };

  if (dataWhiteSpace(data)) {
    return false;
  } else {
    return true;
  }
};

export const SignupFormFirst = ({ onChange, value, onNext }: formType) => {
  const [student_name, school_gcn] = value;
  return (
    <>
      <Input
        width={400}
        label="이름"
        placeholder="이름"
        margin={['top', 16]}
        type="text"
        name="student_name"
        onChange={onChange}
        value={student_name}
      />
      <Input
        width={400}
        label="학번"
        placeholder="학번"
        margin={['top', 36]}
        type="text"
        name="school_gcn"
        onChange={onChange}
        value={school_gcn}
      />
      <BtnContainer>
        <Button buttonStyle="solid" margin={['top', 48]} size="medium" onClick={onNext} isDisable={cantSubmit(value)}>
          다음
        </Button>
      </BtnContainer>
    </>
  );
};

export const SignupFormSecond = ({ onChange, value, onNext }: formType) => {
  const [email, account_id, github] = value;
  return (
    <>
      <Input
        width={400}
        label="이메일"
        placeholder="dsm 계정의 이메일"
        margin={['top', 16]}
        type="text"
        name="email"
        onChange={onChange}
        value={email}
      />
      <Input
        width={400}
        label="아이디"
        placeholder="아이디"
        margin={['top', 36]}
        type="text"
        name="account_id"
        onChange={onChange}
        value={account_id}
      />
      <Input
        width={400}
        label="깃허브 주소"
        placeholder="링크"
        margin={['top', 36]}
        type="text"
        name="github"
        onChange={onChange}
        value={github}
      />
      <BtnContainer>
        <Button buttonStyle="solid" margin={['top', 48]} size="medium" onClick={onNext} isDisable={cantSubmit(value)}>
          다음
        </Button>
      </BtnContainer>
    </>
  );
};

export const SignupFormThird = ({ onChange, value, onNext }: formType) => {
  const [password, okPassword] = value;

  const samePassword = () => {
    return password === okPassword;
  };

  return (
    <>
      <Input
        width={400}
        label="비밀번호"
        placeholder="숫자, 특수 문자 1자 이상 영어 대소문자 포함 8~15자"
        margin={['top', 16]}
        type="password"
        name="password"
        onChange={onChange}
        value={password}
      />
      <Input
        width={400}
        label="비밀번호 확인"
        placeholder="한 번 더 입력해주세요"
        margin={['top', 36]}
        type="password"
        name="okPassword"
        onChange={onChange}
        value={okPassword}
      />
      <BtnContainer>
        <Button
          buttonStyle="solid"
          margin={['top', 48]}
          size="medium"
          onClick={onNext}
          isDisable={cantSubmit(value) && samePassword()}
        >
          다음
        </Button>
      </BtnContainer>
    </>
  );
};

const BtnContainer = styled.div`
  width: 400px;
  display: flex;
  justify-content: end;
`;
