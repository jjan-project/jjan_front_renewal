import { Meta } from "@storybook/react";

import { Stack } from "./Stack";
import type { StackProps } from "./types";

export default {
  title: "Stack",
  component: Stack,
} as Meta;

const BlackDiv = () => (
  <div
    style={{
      background: "black",
      height: "30px",
      width: "30px",
    }}
  ></div>
);

export const Default = (args: StackProps) => {
  return (
    <Stack {...args}>
      <BlackDiv />
      <BlackDiv />
      <BlackDiv />
      <BlackDiv />
      <BlackDiv />
    </Stack>
  );
};
Default.args = {
  as: "div",
  space: "space04",
  align: "center",
};
