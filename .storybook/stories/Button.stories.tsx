import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../dist";

const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Example",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {};
