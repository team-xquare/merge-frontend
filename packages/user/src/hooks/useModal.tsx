import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';

export type useModalReturnType = {
  visible: boolean;
  show: () => void;
  close: () => void;
  ModalWrapper: ({ children }: { children: React.ReactElement }) => React.ReactElement;
};

export type useModalProps = {
  defaultVisible?: boolean;
  ModalWrapper?: ({ children }: { children: React.ReactElement }) => React.ReactElement;
};

export const useModal = ({ defaultVisible = false }: useModalProps = {}): useModalReturnType => {
  const [visible, setVisible] = useState(defaultVisible);

  const show = useCallback(() => setVisible(true), [visible]);
  const close = useCallback(() => setVisible(false), [visible]);

  const ModalWrapper = ({ children }: { children: React.ReactElement }) => {
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
        close();
      }
    };

    return <Wrapper onClick={handleClick}>{children}</Wrapper>;
  };

  return {
    visible,
    show,
    close,
    ModalWrapper,
  };
};

const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh + 52px);
  background-color: rgba(115, 115, 115, 0.2);
  position: absolute;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -52px;
`;
