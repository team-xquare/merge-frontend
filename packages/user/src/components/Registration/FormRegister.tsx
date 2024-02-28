import { ChangeEvent } from 'react';
import { Input, Button } from '@merge/design-system';
import RegisterLogoImg from '../../assets/registerLogo.svg';
// import CheckBoxTrueImg from '../../assets/checkBoxTrue.svg';
// import CheckBoxFalseImg from '../../assets/checkBoxFalse.svg';
import ScreenshotLabelImg from '../../assets/screenshotLabel.svg';
import { ProjectRegisterType } from '../../types/projectType';
import { ImgContainer } from './ImgContainer';
import { projectDuplicate } from '../../apis/project';
import * as _ from './Style';

interface formPropsType {
  logo: Blob | null;
  projectImage: Blob[] | null;
  value: ProjectRegisterType;
  onImageChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
}

interface SecondFormPropsType extends formPropsType {
  onDelete: (num: number) => void;
}

export const RegisterFormFirst = ({ logo, onImageChange }: formPropsType) => {
  return (
    <_.Wrapper height={472}>
      <_.TipTextContainer>
        <_.Important />
        <_.TipText>가 있는 필드는 필수 입력란 입니다.</_.TipText>
      </_.TipTextContainer>
      <_.TextContainer>
        <_.Important />
        <_.InputText>프로젝트 로고 등록하기</_.InputText>
      </_.TextContainer>
      <_.FileInput type="file" id="logo" onChange={onImageChange} />
      <_.LabelLogoInput htmlFor="logo">
        {logo === null || logo === undefined ? (
          <img src={RegisterLogoImg} />
        ) : (
          <img src={URL.createObjectURL(logo)} style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
        )}
      </_.LabelLogoInput>
    </_.Wrapper>
  );
};

export const RegisterFormSecond = ({ value, projectImage, onChange, onImageChange, onDelete }: SecondFormPropsType) => {
  return (
    <_.Wrapper height={1184}>
      <_.TipTextContainer>
        <_.Important />
        <_.TipText>가 있는 필드는 필수 입력란 입니다.</_.TipText>
      </_.TipTextContainer>
      <Input
        width={668}
        important={true}
        label="프로젝트 명"
        placeholder="유저에게 표시 할 이름을 적어주세요"
        value={value.project_name}
        name="project_name"
        onChange={onChange}
      />
      <_.InputContainer>
        <Input
          width={528}
          important={true}
          label="프로젝트 명(영어)"
          placeholder="영어"
          margin={['top', 52]}
          value={value.project_name_en}
          name="project_name_en"
          onChange={onChange}
        />
        <Button
          buttonStyle="ghost"
          size="small"
          onClick={() => {
            projectDuplicate(value.project_name_en);
          }}
        >
          중복 확인
        </Button>
      </_.InputContainer>
      <Input
        width={668}
        important={true}
        label="팀 명(영어)"
        placeholder="영어"
        margin={['top', 52]}
        value={value.team_name_en}
        name="team_name_en"
        onChange={onChange}
      />
      <_.AreaTextContainer>
        <_.TextContainer>
          <_.Important />
          <_.InputText>프로젝트 개요 혹은 프로젝트 설명을 작성하기</_.InputText>
        </_.TextContainer>
        <_.AreaTextLength>
          <span>{value.description.length}</span>/500
        </_.AreaTextLength>
      </_.AreaTextContainer>
      <_.Area
        placeholder="프로젝트 설명을 작성해주세요."
        maxLength={500}
        value={value.description}
        name="description"
        onChange={onChange}
      />
      <_.TextContainer style={{ marginTop: '52px' }}>
        <_.InputText>프로젝트 스크린샷 또는 사진 등록하기</_.InputText>
      </_.TextContainer>
      <_.FileInput type="file" id="screenshot" onChange={onImageChange} />
      <_.LabelScreenshotInput htmlFor="screenshot">
        <img src={ScreenshotLabelImg} />
      </_.LabelScreenshotInput>
      <ImgContainer files={projectImage} onDelete={onDelete} />
    </_.Wrapper>
  );
};

export const RegisterFormThird = ({ value, onChange }: formPropsType) => {
  return (
    <_.Wrapper height={560}>
      <Input
        width={668}
        label="깃허브 주소"
        placeholder="링크"
        margin={['top', 0]}
        value={value.github_url}
        name="github_url"
        onChange={onChange}
      />
      <Input
        width={668}
        label="웹 주소"
        placeholder="링크"
        margin={['top', 52]}
        value={value.web_url}
        name="web_url"
        onChange={onChange}
      />
      <Input
        width={668}
        label="플레이 스토어 주소"
        placeholder="링크"
        margin={['top', 52]}
        value={value.play_store_url}
        name="play_store_url"
        onChange={onChange}
      />
      <Input
        width={668}
        label="앱 스토어 주소"
        placeholder="링크"
        margin={['top', 52]}
        value={value.app_store_url}
        name="app_store_url"
        onChange={onChange}
      />
    </_.Wrapper>
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
