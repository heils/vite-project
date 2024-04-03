import type { Meta, StoryObj } from '@storybook/react';
import { Form } from './Form';

const meta: Meta = {
  title: 'Components/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {control: 'color'},
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    size: 'normal',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  }
}
