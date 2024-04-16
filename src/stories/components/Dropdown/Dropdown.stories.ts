import { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";

const meta: Meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { text: "Blue", value: "Home" },
      { text: "Red", value: "About" },
      { text: "White", value: "My Projects" },
      { text: "White", value: "Contact" },
    ],
  },
};

export const Disabled: Story = {
  args: {
    options: [
      { text: "Blue", value: "Home" },
      { text: "Red", value: "About" },
      { text: "White", value: "My Projects" },
      { text: "White", value: "Contact" },
    ],
    disabled: "true",
  },
};
