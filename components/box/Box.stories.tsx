import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Box } from "./Box";

const meta: Meta<typeof Box> = {
  title: "Box",
  component: Box,
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Default: Story = {
  render: () => (
    <Box>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
    </Box>
  ),
};
