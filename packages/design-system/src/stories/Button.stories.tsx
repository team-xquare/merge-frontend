import { Meta, StoryFn } from '@storybook/react';
import { Button } from '../components/Button';

export default {
  title: 'component/Button',
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Argument = {
  ...Template,
  args: { size: 'medium', buttonStyle: 'solid', isDisable: false, children: 'button' },
};
