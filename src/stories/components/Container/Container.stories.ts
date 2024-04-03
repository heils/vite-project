import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';

const meta: Meta = {
  title: 'Components/Container',
  component: Container,
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
