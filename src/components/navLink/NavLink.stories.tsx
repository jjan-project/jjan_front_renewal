import { Meta, StoryObj } from "@storybook/react";

import { NavLink } from "./NavLink";

const meta: Meta<typeof NavLink> = {
  title: "NavLink",
  component: NavLink,
};

export default meta;

type Story = StoryObj<typeof NavLink>;

export const Default: Story = {
  render: () => <NavLink link="/">고객센터</NavLink>,
};
