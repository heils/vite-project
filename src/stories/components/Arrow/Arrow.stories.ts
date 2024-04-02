import type { Meta, StoryObj } from '@storybook/react';
import { Arrow } from './Arrow';

const meta = {
  title: 'Components/Arrow',
  component: Arrow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Arrow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};

export const Disabled: Story = {
  args:{
    disabled: true,
  },
};
