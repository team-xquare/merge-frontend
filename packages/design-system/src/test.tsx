import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Test: FC<Props> = ({ children }) => <p>{children}</p>;
