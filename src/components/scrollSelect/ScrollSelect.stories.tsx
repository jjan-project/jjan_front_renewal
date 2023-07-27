import { action } from "@storybook/addon-actions";
import { StoryObj, Meta } from "@storybook/react";

import ScrollSelect from "./ScrollSelect";
import { ScrollPickerProps } from "./types";

const meta: Meta<typeof ScrollSelect> = {
  title: "ScrollSelect",
  component: ScrollSelect,
};

export default meta;

type Story = StoryObj<typeof ScrollSelect>;

export const Default: Story = (args: ScrollPickerProps) => {
  return <ScrollSelect {...args} />;
};

Default.args = {
  list: [0, 1, 2, "당근", 3, 4, 5],
  width: 100,
  height: 150,
  onSelectedChange: action("onSelectedChange"),
};
