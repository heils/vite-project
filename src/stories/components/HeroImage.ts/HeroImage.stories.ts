import { Meta, StoryObj } from "@storybook/react";
import HeroImage from "./HeroImage";

const meta: Meta = {
  title: "Components/HeroImage",
  component: HeroImage,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof HeroImage>;

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
