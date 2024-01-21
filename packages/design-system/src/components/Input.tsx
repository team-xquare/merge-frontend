import styled from '@emotion/styled';
import { theme } from '../style/index';
import { css } from '@emotion/react';

//type inputStyleType = 'field' | 'fieldLabel';
type inputType = 'text' | 'password';

interface input {
  width: number;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  //inputStyle?: inputStyleType;
  inputType?: inputType;
  placehorder?: string;
  isDisable?: boolean;
  label?: string;
  supportText?: string;
  value?: string | number;
  err?: boolean;
}

export const Input = ({
  width,
  inputType = 'text',
  placehorder,
  isDisable = false,
  label,
  supportText,
  value,
  err = false,
  onChange,
}: input) => {
  return (
    <Wrapper width={width}>
      {label && <Label>{label}</Label>}
      <InputBox
        value={value}
        placeholder={placehorder}
        isDisable={isDisable}
        disabled={isDisable && true}
        err={err}
        type={inputType}
        onChange={onChange}
      />
      {supportText && <Support err={err}>{supportText}</Support>}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ width: number }>`
  width: ${({ width }) => `${width}px`};
  height: 40px;
  position: relative;
`;

const Label = styled.label`
  width: 0px;
  height: 0px;
  cursor: pointer;
  position: absolute;
  top: -20px;
  ${theme.font.label}
  color:${theme.color.gray900}
`;

const InputBox = styled.input<{ isDisable: boolean; err: boolean }>`
  border-radius: 8px;
  width: calc(100% - 50px);
  padding-left: 24px;
  padding-right: 24px;
  height: 38px;
  ${theme.font.caption};
  background-color: ${({ err }) => (err ? theme.color.danger50 : theme.color.gray50)};
  border: 1px solid ${({ err }) => (err ? theme.color.danger500 : theme.color.gray50)};

  &:hover {
    ${({ isDisable, err }) =>
      isDisable
        ? undefined
        : err
          ? css`
              border: 1px solid ${theme.color.danger500};
            `
          : css`
              border: 1px solid ${theme.color.gray300};
            `}
  }

  &:focus {
    ${({ isDisable, err }) =>
      isDisable
        ? undefined
        : err
          ? css`
              outline: 1px solid ${theme.color.danger500};
            `
          : css`
              outline: 1px solid ${theme.color.primary500};
            `}
  }

  &::placeholder {
    color: ${({ isDisable }) => (isDisable ? theme.color.gray200 : theme.color.gray500)};
  }
`;

const Support = styled.div<{ err: boolean }>`
  width: 0px;
  height: 0px;
  position: absolute;
  top: 40px;
  ${theme.font.label};
  color: ${({ err }) => (err ? theme.color.danger500 : theme.color.gray800)};
`;
