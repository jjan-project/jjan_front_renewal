import { Meta } from "@storybook/react";

import { Avatar } from "./Avatar";
import type { AvatarProps } from "./types";

export default {
  title: "Avatar",
  component: Avatar,
} as Meta;

export const Default = (args: AvatarProps) => {
  return <Avatar {...args} />;
};
Default.args = {
  alt: "사용자 아바타",
  src: "/avatarTestImg/test1.png",
  width: "60px",
  height: "60px",
  isDisabled: false,
};
