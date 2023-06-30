import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { TextArea } from "./TextArea";
import { TextAreaProps } from "./types";

const meta: Meta<typeof TextArea> = {
  title: "TextArea",
  component: TextArea,
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = (args: TextAreaProps) => {
  return <TextArea {...args} />;
};
Default.args = {
  minLength: 2,
  maxLength: 5,
  width: "300px",
  height: "200px",
  placeholder: "입력하는 장소..",
  disabled: false,
};
