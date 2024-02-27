import React, { useCallback, useState, useMemo } from 'react';
import styled from '@emotion/styled';

export type useModalReturnType = {
  visible: string | boolean;
  show: (arg?: string | boolean) => void;
  close: () => void;
  ModalWrapper: ({ children }: { children: React.ReactNode }) => React.ReactElement;
};

export type useModalProps = {
  defaultVisible?: string | boolean;
};

export const useModal = ({ defaultVisible = false }: useModalProps = {}): useModalReturnType => {
  const [visible, setVisible] = useState(defaultVisible);

  const show = useCallback((arg: string | boolean = true) => setVisible(arg), [visible]);
  const close = useCallback(() => setVisible(false), [visible]);

  const ModalWrapper = useMemo(() => {
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
        close();
      }
    };

    return ({ children }: { children: React.ReactNode }) => {
      return <Wrapper onClick={handleClick}>{children}</Wrapper>;
    };
  }, [close]);

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
