import { Meta, StoryFn } from '@storybook/react';
import { Input } from '../components/Input';

export default {
  title: 'component/Input',
  component: Input,
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const Argument = {
  ...Template,
  args: {
    width: 400,
    inputType: 'text',
    placehorder: 'placehorder',
    isDisable: false,
    label: 'label',
    supportText: 'supportText',
    value: '',
    err: false,
  },
};
