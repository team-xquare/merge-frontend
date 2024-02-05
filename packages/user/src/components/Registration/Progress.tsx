import styled from '@emotion/styled';
import { theme } from '@merge/design-system';

type progressStateType = 'success' | 'now' | 'disable';

type ProgressStateProps = {
  state: progressStateType;
};

const ProgressState = ({ state }: ProgressStateProps) => {};

export const Progress = () => {
  return <Wrapper></Wrapper>;
};

const Wrapper = styled.div`
  width: 346px;
  height: 440px;
  border-radius: 12px;
  background-color: ${theme.color.white};
`;
