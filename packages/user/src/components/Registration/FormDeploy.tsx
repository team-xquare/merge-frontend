import { ChangeEvent } from 'react';
import styled from '@emotion/styled';
import { theme, Input, Button } from '@merge/design-system';
// import { useState } from 'react';
import CheckBoxTrueImg from '../../assets/checkBoxTrue.svg';
import CheckBoxFalseImg from '../../assets/checkBoxFalse.svg';
// import PlusButtonImg from '../../assets/PlusButton.svg';
// import TrashButtonImg from '../../assets/TrashButton.svg';
import { deployType } from '../../types/projectType';
import { duplication } from '../../apis/deploy';

type formPropsType = {
  value: deployType;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setDeployData: React.Dispatch<React.SetStateAction<deployType>>;
};

export const DeployFormFirst = ({ value, onChange }: formPropsType) => {
  return (
    <Wrapper height={472}>
      <TipTextContainer>
        <Important />
        <TipText>가 있는 필드는 필수 입력란 입니다.</TipText>
      </TipTextContainer>
      <div style={{ display: 'flex', alignItems: 'end' }}>
        <Input
          width={558}
          important={true}
          label="컨테이너 영문명"
          placeholder="영소문자와 대시(-)로만 이루어 져야 합니다."
          margin={[0, 10, 0, 0]}
          value={value.container_name}
          name="container_name"
          onChange={onChange}
        />
        <Button
          buttonStyle="ghost"
          size="small"
          onClick={() => {
            duplication(value.container_name);
          }}
        >
          중복 확인
        </Button>
      </div>

      <Input
        width={668}
        important={true}
        label="배포할 깃허브 레포지토리 링크"
        placeholder="링크"
        margin={['top', 52]}
        value={value.github_url}
        name="github_url"
        onChange={onChange}
      />
    </Wrapper>
  );
};

export const DeployFormSecond = ({ value, setDeployData }: formPropsType) => {
  const onClick = (e: React.MouseEvent) => {
    const { className } = e.target as HTMLElement;
    const key = className.split(' ')[0] as keyof deployType;
    const newValue = value[key];

    setDeployData({ ...value, [key]: !newValue });
  };

  const onTypeChange = (type: string) => {
    setDeployData({ ...value, service_type: type });
  };

  return (
    <Wrapper height={544}>
      <TipTextContainer>
        <Important />
        <TipText>가 있는 필드는 필수 입력란 입니다.</TipText>
      </TipTextContainer>
      <TextContainer>
        <Important />
        <InputText>배포 타입을 선택해주세요</InputText>
      </TextContainer>
      <ButtonContainer>
        <_Button select={value.service_type === 'FE'} onClick={() => onTypeChange('FE')}>
          FrontEnd
        </_Button>
        <_Button select={value.service_type === 'BE'} onClick={() => onTypeChange('BE')}>
          BackEnd
        </_Button>
      </ButtonContainer>
      <TextContainer style={{ marginTop: '52px' }}>
        <Important />
        <InputText>Redis 사용 여부</InputText>
      </TextContainer>
      <CheckBox onClick={onClick} check={value.redis} className="redis">
        <span>Redis 사용</span>
        <img src={value.redis ? CheckBoxTrueImg : CheckBoxFalseImg} />
      </CheckBox>
      <TextContainer style={{ marginTop: '52px' }}>
        <Important />
        <InputText>MySQL 사용 여부</InputText>
      </TextContainer>
      <CheckBox onClick={onClick} check={value.mysql} className="mysql">
        <span>MySQL 사용</span>
        <img src={value.mysql ? CheckBoxTrueImg : CheckBoxFalseImg} />
      </CheckBox>
    </Wrapper>
  );
};

// export const DeployFormThird = () => {
//   type inputType = {
//     key: string;
//     value: string;
//   };

//   const input = {
//     key: '',
//     value: '',
//   };

//   const [inputs, setInputs] = useState<inputType[]>([{ key: '', value: '' }]);

//   const onPlus = () => {
//     setInputs([...inputs, input]);
//   };

//   const onTrash = (index: number) => {
//     const newInputs = inputs.filter((_, inputIndex) => index !== inputIndex);

//     setInputs(newInputs);
//   };

//   return (
//     <Wrapper height={544}>
//       <TipTextContainer>
//         <TipText>환경 변수를 입력하세요</TipText>
//       </TipTextContainer>
//       {inputs.map((element, index) => {
//         return (
//           <InputContainer key={index}>
//             <Input
//               width={176}
//               placeholder="key"
//               // value={value.project_name_en}
//               name="project_name_en"
//               // onChange={onChange}
//             />
//             <Input
//               width={440}
//               placeholder="value"
//               // value={value.project_name_en}
//               name="project_name_en"
//               // onChange={onChange}
//             />
//             {index === inputs.length - 1 ? (
//               <img src={PlusButtonImg} onClick={onPlus} />
//             ) : (
//               <img
//                 src={TrashButtonImg}
//                 onClick={() => {
//                   onTrash(index);
//                 }}
//               />
//             )}
//           </InputContainer>
//         );
//       })}
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

const TipTextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 36px;
`;

const InputText = styled.div`
  ${theme.font.label};
  color: ${theme.color.gray900};
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
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

const ButtonContainer = styled.div`
  width: 324px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
`;

const _Button = styled.div<{ select: boolean }>`
  width: 150px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: ${({ select }) => (select ? '2px' : '1px')} solid
    ${({ select }) => (select ? theme.color.primary800 : theme.color.gray500)};
  ${theme.font.buttonLarge};
  background-color: ${theme.color.gray50};
  color: ${({ select }) => (select ? theme.color.primary800 : theme.color.gray500)};
  cursor: pointer;
  transition: 0.05s linear;
`;

// const InputContainer = styled.div`
//   width: 694px;
//   height: 40px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 20px;
//   margin-top: 20px;
// `;
