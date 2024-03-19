import { Meta, StoryObj } from '@storybook/react';
import RadioButton from './RadioButton';

const meta: Meta = {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ],
    name: "test",
  },
};


export const Disabled: Story = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1', disabled: true },
      { label: 'Option 2', value: 'option2' },
    ],
    name: "test2",
  },
}

