import { Meta, StoryObj } from "@storybook/react";

import { Hr } from "./Hr";
import { PropsType } from "./types";

const meta: Meta<typeof Hr> = {
  title: "Hr",
  component: Hr,
};

export default meta;

type Story = StoryObj<typeof Hr>;

export const Default: Story = (args: PropsType) => {
  return <Hr {...args} />;
};

Default.args = {
  type: "solid",
  backgroundColor: "gray700",
};
