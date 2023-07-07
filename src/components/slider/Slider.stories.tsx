import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Slider } from "./Slider";

const meta: Meta<typeof Slider> = {
  title: "Slider",
  component: Slider,
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<number>(0);

    return (
      <>
        <p>{value}</p>
        <Slider min={0} max={1000} value={value} setValue={setValue} />
      </>
    );
  },
};

export const WithStep: Story = {
  render: () => {
    const [value, setValue] = useState<number>(0);

    return (
      <>
        <p>{value}</p>
        <Slider min={0} max={100} step={10} value={value} setValue={setValue} />
      </>
    );
  },
};
