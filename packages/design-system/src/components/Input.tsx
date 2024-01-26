import React, { InputHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { marginCssType, marginToCss, marginType } from '../utils/margin';
import { theme } from '../style/index';
import { css } from '@emotion/react';

//type inputStyleType = 'field' | 'fieldLabel';

interface input extends marginCssType, InputHTMLAttributes<HTMLInputElement> {
  width: number;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  //inputStyle?: inputStyleType;
  isDisable?: boolean;
  label?: string;
  supportText?: string;
  err?: boolean;
  important?: boolean;
}

export const Input = ({
  width,
  isDisable = false,
  label,
  supportText,
  err = false,
  onChange,
  margin,
  important,
  ...props
}: input) => {
  return (
    <Wrapper width={width} margin={margin} label={!!label} supportText={!!supportText}>
      {label && (
        <Label>
          {important && <Important />}
          {label}
        </Label>
      )}
      <InputBox {...props} isDisable={isDisable} disabled={isDisable && true} err={err} onChange={onChange} />
      {supportText && <Support err={err}>{supportText}</Support>}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ width: number; margin?: marginType | marginType[]; label: boolean; supportText: boolean }>`
  width: ${({ width }) => `${width}px`};
  height: ${({ label, supportText }) => (label && supportText ? '90px' : label ? '70px' : '40px')};
  position: relative;
  ${({ margin }) => marginToCss({ margin })};
`;

const Label = styled.label`
  width: 100%;
  height: 16px;
  cursor: default;
  ${theme.font.label};
  color: ${theme.color.gray900};
  display: flex;
  align-items: center;
  margin-bottom: 14px;
`;

const InputBox = styled.input<{ isDisable: boolean; err: boolean }>`
  border-radius: 8px;
  width: calc(100% - 50px);
  padding-left: 24px;
  padding-right: 24px;
  height: 40px;
  ${theme.font.caption};
  background-color: ${({ err }) => (err ? theme.color.danger50 : theme.color.gray50)};
  border: 1px solid ${({ err }) => (err ? theme.color.danger500 : theme.color.gray50)};
  cursor: ${({ isDisable }) => (isDisable ? 'not-allowed' : 'text')};

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
  width: 100%;
  height: 16px;
  ${theme.font.label};
  color: ${({ err }) => (err ? theme.color.danger500 : theme.color.gray800)};
  margin-top: 4px;
  cursor: default;
`;

const Important = styled.div`
  width: 5px;
  height: 5px;
  background-color: ${theme.color.primaryA400};
  margin-right: 4px;
  border-radius: 50%;
`;
