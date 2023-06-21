import { Meta, StoryObj } from "@storybook/react";
import { IconBrokenHomePurple, IconCameraPurple } from "jjan-icon";
import React from "react";

import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Outline: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "48px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <p>Input with Label</p>
        <Input
          type="text"
          name="example"
          appearance="outline"
          label="email"
          labelPostion="outer"
          icon={<IconBrokenHomePurple />}
          isValid={true}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <p>Input with no Label</p>
        <Input
          type="text"
          name="example"
          appearance="outline"
          icon={<IconBrokenHomePurple />}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <p>Input with no Label and no Icon</p>
        <Input type="text" name="example" appearance="outline" />
      </div>
    </div>
  ),
};

export const UnderLine: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "48px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <p>Input with Label</p>
        <Input
          type="text"
          name="example"
          appearance="underline"
          label="email"
          icon={<IconBrokenHomePurple />}
          isValid={true}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <p>Input with no Label</p>
        <Input
          type="password"
          name="example"
          appearance="underline"
          icon={<IconBrokenHomePurple />}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <p>Input with no Label and no Icon</p>
        <Input type="text" name="example" appearance="underline" />
      </div>
    </div>
  ),
};

export const Filled: Story = {
  render: () => (
    <Input
      type="text"
      name="example"
      appearance="filled"
      placeholder="장소 검색"
      autoComplete="off"
      icon={<IconCameraPurple />}
    />
  ),
};
