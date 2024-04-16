import { Meta, StoryObj } from "@storybook/react";
import RadioButton from "./RadioButton";

const meta: Meta = {
  title: "Components/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { label: "Email", value: "email" },
      { label: "Phone", value: "phone" },
    ],
    name: "test",
  },
};

export const Disabled: Story = {
  args: {
    options: [
      { label: "Email", value: "email", disabled: true },
      { label: "Phone", value: "phone" },
    ],
    name: "test2",
  },
};
