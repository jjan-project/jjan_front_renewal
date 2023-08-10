import { Meta, StoryObj } from "@storybook/react";

import { CheckBox } from "./CheckBox";
import { CheckBoxProps } from "./types";

const meta: Meta<typeof CheckBox> = {
  title: "CheckBox",
  component: CheckBox,
};

export default meta;

type Story = StoryObj<typeof CheckBox>;

export const Default: Story = (args: CheckBoxProps) => {
  return <CheckBox {...args} />;
};

Default.args = {
  id: "1",
  backgroundColor: "black",
  borderRadius: "50%",
  width: 20,
  height: 20,
};
