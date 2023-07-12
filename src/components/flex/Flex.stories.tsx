import { Meta, StoryObj } from "@storybook/react";

import { Flex } from "./Flex";

import { Box } from "@/components/box";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";

const meta: Meta<typeof Flex> = {
  title: "Flex",
  component: Flex,
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  render: () => (
    <Box height="500px">
      <Flex flexDirection="column" justifyContent="space-between">
        <Stack space="space05">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </Stack>
        <div>hello</div>
        <Typo appearance="header1">hello</Typo>
      </Flex>
    </Box>
  ),
};
