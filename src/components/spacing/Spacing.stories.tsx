import { Meta, StoryObj } from "@storybook/react";

// import { Stack } from "../stack";

import { Spacing } from "./Spacing";

const meta: Meta<typeof Spacing> = {
  title: "Spacing",
  component: Spacing,
};

export default meta;

type Story = StoryObj<typeof Spacing>;

export const Horizontal: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "50px",
        gap: "8px",
      }}
    >
      <Spacing
        size={4}
        direction="horizontal"
        style={{
          background: "#000",
        }}
      />
      <Spacing
        size={8}
        direction="horizontal"
        style={{
          background: "#000",
        }}
      />
      <Spacing
        size={12}
        direction="horizontal"
        style={{
          background: "#000",
        }}
      />
      <Spacing
        size={16}
        direction="horizontal"
        style={{
          background: "#000",
        }}
      />
      <Spacing
        size={20}
        direction="horizontal"
        style={{
          background: "#000",
        }}
      />
      <Spacing
        size={24}
        direction="horizontal"
        style={{
          background: "#000",
        }}
      />
      <Spacing
        size={28}
        direction="horizontal"
        style={{
          background: "#000",
        }}
      />
      <Spacing
        size={32}
        direction="horizontal"
        style={{
          background: "#000",
        }}
      />
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <Spacing
        size={4}
        direction="vertical"
        style={{
          background: "#000",
        }}
      />
      <Spacing
        size={8}
        direction="vertical"
        style={{
          background: "#000",
        }}
      />
      <Spacing
        size={12}
        direction="vertical"
        style={{
          background: "#000",
        }}
      />
      <Spacing
        size={16}
        direction="vertical"
        style={{
          background: "#000",
        }}
      />
      <Spacing
        size={20}
        direction="vertical"
        style={{
          background: "#000",
        }}
      />
      <Spacing
        size={24}
        direction="vertical"
        style={{
          background: "#000",
        }}
      />
      <Spacing
        size={28}
        direction="vertical"
        style={{
          background: "#000",
        }}
      />
      <Spacing
        size={32}
        direction="vertical"
        style={{
          background: "#000",
        }}
      />
    </div>
  ),
};
