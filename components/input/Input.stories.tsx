import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Variant: Story = {
  render: () => <Input type="text" name="example" />,
};
