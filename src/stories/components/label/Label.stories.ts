import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";

const meta = {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Lorem Ipsum is simply dummy text of thsheets containing Lorem Ipsum.",
    primary: true,
    size: "normal",
  },
};
export const Disabled: Story = {
  args: {
    text: "Lorem Ipsum is simply dummy text of thsheets containing Lorem Ipsum.",
    primary: true,
    disabled: true,
    size: "normal",
  },
};
