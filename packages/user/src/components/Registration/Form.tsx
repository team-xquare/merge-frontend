import { ChangeEvent, useState } from 'react';
import styled from '@emotion/styled';
import { theme, Input } from '@merge/design-system';
import RegisterLogoImg from '../../assets/registerLogo.svg';
import CheckBoxTrueImg from '../../assets/checkBoxTrue.svg';
import CheckBoxFalseImg from '../../assets/checkBoxFalse.svg';
import ScreenshotLabelImg from '../../assets/screenshotLabel.svg';
import { projectType } from 'src/types/projectType';

type RegisterFormFirstPropsType = {
  logo: File | null;
  func: (event: ChangeEvent<HTMLInputElement>) => void;
};

type RegisterFormSecondPropsType = {
  value: projectType;
  projectImage: File[] | null;
  func1: (e: ChangeEvent<HTMLInputElement>) => void;
  func2: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  func3: (event: ChangeEvent<HTMLInputElement>) => void;
};

type RegisterFormThirdPropsType = {
  value: projectType;
  func: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const RegisterFormFirst = ({ logo, func }: RegisterFormFirstPropsType) => {
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
      <FileInput type="file" id="logo" onChange={func} />
      <LabelLogoInput htmlFor="logo">
        {logo === null ? (
          <img src={RegisterLogoImg} />
        ) : (
          <img src={URL.createObjectURL(logo)} style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
        )}
      </LabelLogoInput>
    </Wrapper>
  );
};

export const RegisterFormSecond = ({ value, projectImage, func1, func2, func3 }: RegisterFormSecondPropsType) => {
  return (
    <Wrapper height={1184}>
      <TipTextContainer>
        <Important />
        <TipText>가 있는 필드는 필수 입력란 입니다.</TipText>
      </TipTextContainer>
      <Input
        width={668}
        important={true}
        label="프로젝트 명(한글)"
        placeholder="한글"
        value={value.project_name_ko}
        name="project_name_ko"
        onChange={func1}
      />
      <Input
        width={668}
        important={true}
        label="프로젝트 명(영어)"
        placeholder="영어"
        margin={['top', 52]}
        value={value.project_name_en}
        name="project_name_en"
        onChange={func1}
      />
      <Input
        width={668}
        important={true}
        label="팀 명(영어)"
        placeholder="영어"
        margin={['top', 52]}
        value={value.team_name_en}
        name="team_name_en"
        onChange={func1}
      />
      <AreaTextContainer>
        <TextContainer>
          <Important />
          <InputText>프로젝트 개요 혹은 프로젝트 설명을 작성하기</InputText>
        </TextContainer>
        <AreaTextLength>
          <span>100</span>/500
        </AreaTextLength>
      </AreaTextContainer>
      <Area
        placeholder="프로젝트 설명을 작성해주세요."
        maxLength={500}
        value={value.description}
        name="description"
        onChange={func2}
      />
      <TextContainer style={{ marginTop: '52px' }}>
        <InputText>프로젝트 스크린샷 또는 사진 등록하기</InputText>
      </TextContainer>
      <FileInput type="file" id="screenshot" onChange={func3} />
      <LabelScreenshotInput htmlFor="screenshot">
        <img src={ScreenshotLabelImg} />
      </LabelScreenshotInput>
      {projectImage &&
        projectImage.map((element, index) => {
          return <img src={URL.createObjectURL(element)} key={index} />;
        })}
    </Wrapper>
  );
};

export const RegisterFormThird = ({ value, func }: RegisterFormThirdPropsType) => {
  return (
    <Wrapper height={560}>
      <Input
        width={668}
        label="깃허브 주소"
        placeholder="링크"
        margin={['top', 0]}
        value={value.github_url}
        name="github_url"
        onChange={func}
      />
      <Input
        width={668}
        label="웹 주소"
        placeholder="링크"
        margin={['top', 52]}
        value={value.web_url}
        name="web_url"
        onChange={func}
      />
      <Input
        width={668}
        label="플레이 스토어 주소"
        placeholder="링크"
        margin={['top', 52]}
        value={value.play_store_url}
        name="play_store_url"
        onChange={func}
      />
      <Input
        width={668}
        label="앱 스토어 주소"
        placeholder="링크"
        margin={['top', 52]}
        value={value.app_store_url}
        name="app_store_url"
        onChange={func}
      />
    </Wrapper>
  );
};

// export const RegisterFormForth = ({ value }: RegisterFormPropsType) => {
//   const [check, setCheck] = useState<boolean>(false);

//   return (
//     <Wrapper height={560}>
//       <TipTextContainer>
//         <TipText>ouath 사용을 원하는 경우에만 작성해주세요.</TipText>
//       </TipTextContainer>
//       <TextContainer>
//         <InputText>oauth 사용 여부</InputText>
//       </TextContainer>
//       <CheckBox onClick={() => setCheck(!check)} check={check}>
//         <span>oauth 사용 여부</span>
//         <img src={check ? CheckBoxTrueImg : CheckBoxFalseImg} />
//       </CheckBox>
//       <Input width={668} label="redirect_url" placeholder="redirect_url" margin={['top', 52]} />
//     </Wrapper>
//   );
// };

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

const FileInput = styled.input`
  width: 0;
  height: 0;
`;

const AreaTextContainer = styled.div`
  width: 668px;
  display: flex;
  justify-content: space-between;
  margin-top: 52px;
  margin-bottom: 14px;
`;

const AreaTextLength = styled.div`
  color: ${theme.color.primary400};
  ${theme.font.subTitle3};
  span {
    color: ${theme.color.primaryA200};
  }
`;

const Area = styled.textarea`
  width: 668px;
  height: 216px;
  ${theme.font.caption};
  border-radius: 8px;
  background-color: ${theme.color.gray50};
  color: ${theme.color.gray800};
  padding: 8px 24px;
  resize: none;
  border: 1px solid ${theme.color.gray50};
  &::placeholder {
    color: ${theme.color.gray500};
  }
  &:hover {
    border: 1px solid ${theme.color.gray300};
  }
  &:focus {
    outline: 1px solid ${theme.color.primary500};
  }
`;

const CheckBox = styled.div<{ check: boolean }>`
  width: 668px;
  height: 40px;
  padding: 0 40px;
  display: flex;
  background-color: ${theme.color.gray50};
  border-radius: 12px;
  margin-top: 14px;
  color: ${({ check }) => (check ? theme.color.primaryA200 : theme.color.gray500)};
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const LabelScreenshotInput = styled.label`
  width: 668px;
  height: 160px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.gray50};
  margin-top: 14px;
  cursor: pointer;
`;
