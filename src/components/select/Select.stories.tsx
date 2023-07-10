import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Select } from "./Select";
import { SelectOption } from "./types";

const meta: Meta<typeof Select> = {
  title: "Select",
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => {
    const options = [
      { label: "first", value: 1 },
      { label: "second", value: 2 },
      { label: "third", value: 3 },
      { label: "four", value: 4 },
      { label: "five", value: 5 },
    ];

    const defaultValue = {
      label: "second",
      value: 2,
    };

    const [value, setValue] = useState<SelectOption<number>>(defaultValue);

    return (
      <Select
        options={options}
        value={value}
        onChange={value => setValue(value as SelectOption<number>)}
      />
    );
  },
};
