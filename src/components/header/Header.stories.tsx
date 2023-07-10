import { Meta, StoryObj } from "@storybook/react";
import { IconChevronLeftLarge, IconCancel } from "jjan-icon";

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
        gap: "1rem",
      }}
    >
      <Header>header</Header>
      <Header rightIcon={<IconCancel />}>header with right icon</Header>
      <Header leftIcon={<IconChevronLeftLarge />}>header with left icon</Header>
      <Header leftIcon={<IconChevronLeftLarge />} rightIcon={<IconCancel />}>
        header with both icon
      </Header>
    </div>
  ),
};
