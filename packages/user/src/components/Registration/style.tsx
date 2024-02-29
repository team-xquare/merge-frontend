import styled from '@emotion/styled';
import { theme } from '@merge/design-system';

export const Wrapper = styled.div<{ height: number }>`
  width: 832px;
  height: ${({ height }) => height + 'px'};
  margin-bottom: ${({ height }) => height >= 1000 && '94px'};
  padding: 62px 68px 0 68px;
  display: flex;
  flex-direction: column;
  background-color: ${theme.color.white};
  border-radius: 12px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 668px;
  align-items: end;
`;

export const Important = styled.div`
  width: 5px;
  height: 5px;
  background-color: ${theme.color.primaryA400};
  margin-right: 4px;
  border-radius: 50%;
`;

export const TipText = styled.div`
  ${theme.font.body2};
  color: ${theme.color.gray600};
`;

export const InputText = styled.div`
  ${theme.font.label};
  color: ${theme.color.gray900};
`;

export const TipTextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 36px;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LabelLogoInput = styled.label`
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

export const FileInput = styled.input`
  width: 0;
  height: 0;
`;

export const AreaTextContainer = styled.div`
  width: 668px;
  display: flex;
  justify-content: space-between;
  margin-top: 52px;
  margin-bottom: 14px;
`;

export const AreaTextLength = styled.div`
  color: ${theme.color.primary400};
  ${theme.font.subTitle3};
  span {
    color: ${theme.color.primaryA200};
  }
`;

export const Area = styled.textarea`
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

export const LabelScreenshotInput = styled.label`
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

// const CheckBox = styled.div<{ check: boolean }>`
//   width: 668px;
//   height: 40px;
//   padding: 0 40px;
//   display: flex;
//   background-color: ${theme.color.gray50};
//   border-radius: 12px;
//   margin-top: 14px;
//   color: ${({ check }) => (check ? theme.color.primaryA200 : theme.color.gray500)};
//   align-items: center;
//   justify-content: space-between;
//   cursor: pointer;
// `;
