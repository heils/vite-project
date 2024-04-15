import { Meta, StoryObj } from '@storybook/react';
import TableCell from './TableCell';

const meta: Meta = {
  title: 'Components/TableCell',
  component: TableCell,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TableCell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
      disabled: false,
      content: 'Cell content',
    },
  };
  export const Disabled: Story = {
    args:{
      disabled: true,
      content: 'Cell content',
    },
  };
  

