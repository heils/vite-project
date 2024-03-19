import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Lorem Ipsum is simply dummy text of thsheets containing Lorem Ipsum.",
    primary: true,
    size: "normal",
  },
};
export const Secondary: Story = {
  args: {
    text: "Lorem Ipsum is simply dummy text of thsheets containing Lorem Ipsum.",
    primary: false,
    size: "normal",
  },
};
export const Large: Story = {
  args: {
    text: "Lorem Ipsum is simply dummy text of thsheets containing Lorem Ipsum.",
    primary: true,
    size: "large",
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
