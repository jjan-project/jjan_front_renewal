import { Meta, StoryObj } from "@storybook/react";

import { LoadingSplash } from "./LoadingSplash";
import { LoadingSplashProps } from "./types";

import SvgLoadingSplash from "@/assets/LoadingSplash.svg";

const meta: Meta<typeof LoadingSplash> = {
  title: "LoadingSplash",
  component: LoadingSplash,
};

export default meta;

type Story = StoryObj<typeof LoadingSplash>;

export const Default: Story = (args: LoadingSplashProps) => {
  return <LoadingSplash {...args} />;
};
Default.args = {
  imageUrl: SvgLoadingSplash,
};
