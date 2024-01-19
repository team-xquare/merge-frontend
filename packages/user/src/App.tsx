import { StyledProvider, Button } from '@merge/design-system';

export default function App() {
  return (
    <StyledProvider>
      <Button
        buttonStyle="solid"
        onClick={() => {
          console.log(13);
        }}
        size="large"
        isDisable={false}
      >
        버튼
      </Button>
    </StyledProvider>
  );
}
