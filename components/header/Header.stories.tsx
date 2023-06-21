import { Meta, StoryObj } from "@storybook/react";
import { IconBrokenHomePurple } from "jjan-icon";
import React from "react";

import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  title: "Header",
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <Header>header</Header>
      <Header rightIcon={<IconBrokenHomePurple />}>
        header with right icon
      </Header>
      <Header leftIcon={<IconBrokenHomePurple />}>header with left icon</Header>
      <Header
        leftIcon={<IconBrokenHomePurple />}
        rightIcon={<IconBrokenHomePurple />}
      >
        header with both icon
      </Header>
    </div>
  ),
};
