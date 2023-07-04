import { Meta, StoryObj } from "@storybook/react";
import { IconHome, IconNavigator, IconChat, IconPerson } from "jjan-icon";

import { BottomNav } from "./BottomNav";
import { BottomNavProps } from "./types";

const meta: Meta<typeof BottomNav> = {
  title: "BottomNav",
  component: BottomNav,
};

export default meta;

type Story = StoryObj<typeof BottomNav>;

export const Default: Story = (args: BottomNavProps) => {
  return <BottomNav {...args} />;
};
Default.args = {
  items: [
    { url: "/", label: "홈", icon: <IconHome /> },
    { url: "/finder", label: "탐색하기", icon: <IconNavigator /> },
    { url: "/chat", label: "채팅", icon: <IconChat /> },
    { url: "/profile", label: "프로필", icon: <IconPerson /> },
  ],
};
