import { Meta, StoryObj } from "@storybook/react";

import { Box } from "../box";
import { Flex } from "../flex";
import { Stack } from "../stack";

import { Spacing } from "./Spacing";

const meta: Meta<typeof Spacing> = {
  title: "Spacing",
  component: Spacing,
};

export default meta;

type Story = StoryObj<typeof Spacing>;

const sizes = ["4px", "8px", "12px", "16px", "20px", "24px", "28px", "32px"];

const HSpacings = () =>
  sizes.map(size => (
    <Spacing
      key={size}
      size={size}
      direction="horizontal"
      style={{
        background: "#000",
      }}
    />
  ));

const VSpacings = () =>
  sizes.map(size => (
    <Spacing
      key={size}
      size={size}
      direction="vertical"
      style={{
        background: "#000",
      }}
    />
  ));

export const Horizontal: Story = {
  render: () => (
    <Box height="50px">
      <Flex gap="8px">
        <HSpacings />
      </Flex>
    </Box>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Stack space="space01">
      <VSpacings />
    </Stack>
  ),
};
