import { Meta, StoryObj } from "@storybook/react";
import Image from "./Image";

const meta: Meta = {
  title: "Components/Image",
  component: Image,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    size: "large",
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
    size: "small",
  },
};
