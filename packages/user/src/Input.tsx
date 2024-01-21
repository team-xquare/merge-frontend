import styled from '@emotion/styled';
import { theme } from '../../design-system/src/style';
import { css } from '@emotion/react';

type inputStyleType = 'only' | 'label' | 'borderLabel';
type inputType = 'text' | 'password';

interface input {
  width: number;
  inputStyle: inputStyleType;
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
  inputStyle,
  inputType = 'text',
  placehorder,
  isDisable = false,
  label,
  supportText,
  value,
  err = false,
}: input) => {
  return (
    <Wrapper width={width}>
      {label && <Label>{label}</Label>}
      <InputBox value={value} placeholder={placehorder} isDisable={isDisable} disabled={isDisable && true} err={err} />
      {supportText && <Support>{supportText}</Support>}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ width: number }>`
  width: ${({ width }) => `${width}px`};
  height: 40px;

  margin: 100px;
`;

const Label = styled.label`
  width: 0px;
  height: 0px;
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
    ${({ isDisable }) =>
      isDisable
        ? undefined
        : css`
            border: 1px solid ${theme.color.gray300};
          `}
  }

  &:focus {
    ${({ isDisable }) =>
      isDisable
        ? undefined
        : css`
            border: 1px solid ${theme.color.primary500};
          `}
  }

  &::placeholder {
    color: ${({ isDisable }) => (isDisable ? theme.color.gray200 : theme.color.gray500)};
  }
`;

const Support = styled.div`
  width: 0px;
  height: 0px;
`;
