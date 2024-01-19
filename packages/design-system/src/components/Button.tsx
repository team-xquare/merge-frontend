import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { color } from '../style/color';
import { font } from '../style/font';
import { css } from '@emotion/react';

type buttonStyleType = 'solid' | 'ghost';
type sizeType = 'large' | 'normal' | 'medium' | 'small' | 'extraSmall';

interface button {
  buttonStyle: buttonStyleType;
  size?: sizeType;
  isDisable?: boolean;
}

interface buttonProps extends button {
  children?: ReactNode;
  onClick: () => void;
}

export const Button = ({ buttonStyle, size = 'medium', children, onClick, isDisable }: buttonProps) => {
  return (
    <Wrapper buttonStyle={buttonStyle} size={size} isDisable={isDisable} onClick={isDisable ? undefined : onClick}>
      <Text size={size} isDisable={isDisable} buttonStyle={buttonStyle}>
        {children}
      </Text>
    </Wrapper>
  );
};

/**
 * 매개변수 size를 활용하여 min-width와 height의 크기로 변환하는 함수입니다.
 * @param size 말 그대로 size 값을 받아옵니다.
 * @returns 배열 인덱스의 0번째는 width 값으로 변환한 값을, 1번째는 height 값으로 변환한 값을 반환합니다.
 */
function buttonSizeGenerator(size: sizeType | undefined): number[] {
  let minWidth: number = 0;
  let height: number = 0;

  if (size === undefined) size = 'medium';

  switch (size) {
    case 'large':
      minWidth = 150;
      height = 64;
      break;
    case 'normal':
      minWidth = 150;
      height = 56;
      break;
    case 'medium':
      minWidth = 140;
      height = 48;
      break;
    case 'small':
      minWidth = 130;
      height = 40;
      break;
    case 'extraSmall':
      minWidth = 130;
      height = 32;
      break;
  }

  return [minWidth, height];
}

const Wrapper = styled.button<button>`
  margin: 100px;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: 0.1s linear;
  cursor: ${({ isDisable }) => (isDisable ? 'not-allowed' : 'pointer')};
  border-radius: 4px;

  color: ${({ isDisable, buttonStyle }) =>
    isDisable ? color.gray500 : buttonStyle === 'solid' ? color.gray50 : color.primary800};

  background-color: ${({ buttonStyle, isDisable }) =>
    buttonStyle === 'solid' ? (isDisable ? color.gray100 : color.primary800) : color.gray50};
  ${({ buttonStyle, isDisable }) =>
    !isDisable && buttonStyle === 'ghost'
      ? css`
          border: 2px solid ${color.primary800};
        `
      : css`
          border: 0.5px solid ${color.primary500};
        `};

  min-width: ${({ size }) => `${buttonSizeGenerator(size)[0]}px`};
  height: ${({ size }) => `${buttonSizeGenerator(size)[1]}px`};
  padding: 0px 20px 0px 20px;

  &:hover {
    background-color: ${({ buttonStyle, isDisable }) =>
      !isDisable && (buttonStyle === 'solid' ? color.primary500 : color.gray50)};
    ${({ buttonStyle, isDisable }) =>
      !isDisable &&
      buttonStyle === 'ghost' &&
      css`
        border: 2px solid ${color.primary500};
      `};
    color: ${({ isDisable, buttonStyle }) => !isDisable && buttonStyle === 'ghost' && color.primary500};
  }

  &:focus {
    ${({ isDisable }) =>
      !isDisable &&
      css`
        border: 2px solid ${color.primary200};
      `}
    color: ${({ isDisable, buttonStyle }) => !isDisable && buttonStyle === 'ghost' && color.primary400};
  }

  &:active {
    transition: 0.05s ease-in-out;
    background-color: ${({ buttonStyle, isDisable }) => !isDisable && buttonStyle === 'solid' && color.primary200};
    ${({ buttonStyle, isDisable }) =>
      !isDisable &&
      buttonStyle === 'ghost' &&
      css`
        border: 2px solid ${color.primary200};
      `}
    color: ${({ isDisable, buttonStyle }) => !isDisable && buttonStyle === 'ghost' && color.primary200};
  }
`;

const Text = styled.div<button>`
  ${({ size }) =>
    size === 'extraSmall' || size === 'small'
      ? font.buttonSmall
      : size === 'medium'
        ? font.buttonMedium
        : font.buttonLarge}
`;
