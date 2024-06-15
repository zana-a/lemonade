import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../dist";

const meta = {
  title: "Button",
  component: Button,
  parameters: {},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Click me",
    onClick: () => {},
  },
};
