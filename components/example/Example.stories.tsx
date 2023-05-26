import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Example",
  component: Example,
};

export default meta;

type Story = StoryObj<typeof Example>;

export const Default: Story = {
  render: () => <Example />,
};
