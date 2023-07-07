import { Meta, StoryObj } from "@storybook/react";

import { Typo } from "./Typo";

const meta: Meta<typeof Typo> = {
  title: "Typo",
  component: Typo,
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Typo appearance="header1">hello world</Typo>
        <Typo appearance="header2">hello world</Typo>
        <Typo appearance="body1">hello world</Typo>
        <Typo appearance="body2">hello world</Typo>
        <Typo appearance="body3">hello world</Typo>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Typo appearance="header1" color="black">
          hello world
        </Typo>
        <Typo appearance="header2" color="gray600">
          hello world
        </Typo>
        <Typo appearance="body1" color="orange300">
          hello world
        </Typo>
        <Typo appearance="body2" color="violet400">
          hello world
        </Typo>
        <Typo appearance="body3" color="yellow500">
          hello world
        </Typo>
      </div>
    </div>
  ),
};
