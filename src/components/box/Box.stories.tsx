import { Meta } from "@storybook/react";

import { Box } from "./Box";
import type { BoxProps } from "./types";

export default {
  title: "Box",
  component: Box,
  argTypes: {
    as: {
      options: ["div", "header", "body", "section", "article"],
      control: { type: "radio" },
    },
    overflow: {
      options: ["auto", "clip", "hidden", "scroll", "visible"],
      control: { type: "radio" },
    },
  },
} as Meta;

export const Default = (args: BoxProps) => {
  return <Box {...args}>{args.children}</Box>;
};
Default.args = {
  as: "div",
  overflow: "auto",
  width: "600px",
  height: "600px",
  centerContent: false,
  children: "Simple Box",
};
