import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Flex } from "./Flex";

const meta: Meta<typeof Flex> = {
  title: "Flex",
  component: Flex,
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  render: () => (
    <Flex
      alignContent="space-between"
      alignItems="baseline"
      flexDirection="column"
    >
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
    </Flex>
  ),
};
