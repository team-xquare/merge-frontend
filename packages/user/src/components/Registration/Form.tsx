import { ChangeEvent, useState } from 'react';
import styled from '@emotion/styled';
import { theme, Input } from '@merge/design-system';
import RegisterLogoImg from '../../assets/registerLogo.svg';

export const RegisterFormFirst = () => {
  const [logo, setLogo] = useState<string | null>(null);

  const handleLogoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files.length > 0 ? e.target.files[0] : null;
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setLogo(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Wrapper height={472}>
      <TipTextContainer>
        <Important />
        <TipText>가 있는 필드는 필수 입력란 입니다.</TipText>
      </TipTextContainer>
      <TextContainer>
        <Important />
        <InputText>프로젝트 로고 등록하기</InputText>
      </TextContainer>
      <LogoInput type="file" id="logo" onChange={handleLogoChange} />
      <LabelLogoInput htmlFor="logo">
        {logo === null ? (
          <img src={RegisterLogoImg} />
        ) : (
          <img src={logo} style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
        )}
      </LabelLogoInput>
    </Wrapper>
  );
};

export const RegisterFormSecond = () => {
  return (
    <Wrapper height={1184}>
      <TipTextContainer>
        <Important />
        <TipText>가 있는 필드는 필수 입력란 입니다.</TipText>
      </TipTextContainer>
      <Input width={668} important={true} label="프로젝트 명(한글)" placeholder="한글" />
      <Input width={668} important={true} label="프로젝트 명(영어)" placeholder="영어" margin={['top', 52]} />
      <Input width={668} important={true} label="팀 명(영어)" placeholder="영어" margin={['top', 52]} />
    </Wrapper>
  );
};

export const RegisterFormThird = () => {
  return (
    <Wrapper height={560}>
      <Input width={668} label="깃허브 주소" placeholder="링크" margin={['top', 0]} />
      <Input width={668} label="웹 주소" placeholder="링크" margin={['top', 52]} />
      <Input width={668} label="플레이 스토어 주소" placeholder="링크" margin={['top', 52]} />
      <Input width={668} label="앱 스토어 주소" placeholder="링크" margin={['top', 52]} />
    </Wrapper>
  );
};

export const RegisterFormForth = () => {
  return <div></div>;
};

const Wrapper = styled.div<{ height: number }>`
  width: 832px;
  height: ${({ height }) => height + 'px'};
  margin-bottom: ${({ height }) => height >= 1000 && '94px'};
  padding: 62px 68px 0 68px;
  display: flex;
  flex-direction: column;
  background-color: ${theme.color.white};
  border-radius: 12px;
`;

const Important = styled.div`
  width: 5px;
  height: 5px;
  background-color: ${theme.color.primaryA400};
  margin-right: 4px;
  border-radius: 50%;
`;

const TipText = styled.div`
  ${theme.font.body2};
  color: ${theme.color.gray600};
`;

const InputText = styled.div`
  ${theme.font.label};
  color: ${theme.color.gray900};
`;

const TipTextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 36px;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LabelLogoInput = styled.label`
  width: 230px;
  height: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.gray50};
  margin-top: 14px;
  border-radius: 8px;
  cursor: pointer;
`;

const LogoInput = styled.input`
  width: 0;
  height: 0;
`;
