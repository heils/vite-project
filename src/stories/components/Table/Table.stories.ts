import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";

const meta = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: [
      { key: "c1", title: "Column 1" },
      { key: "c2", title: "Column 2" },
    ],
    data: [
      ["lorem", "lorem"],
      ["lorem", "lorem"],
      ["lorem", "lorem"],
    ],
    disabled:false
  },
};
export const Disabled: Story = {
    args: {
      columns: [
        { key: "c1", title: "Column 1" },
        { key: "c2", title: "Column 2" },
      ],
      data: [
        ["lorem", "lorem"],
        ["lorem", "lorem"],
        ["lorem", "lorem"],
      ],
      disabled: true
    },
  };
  
