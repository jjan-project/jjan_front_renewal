import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const NomalButton: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Button appearance="primary" disabled={false}>
        Button
      </Button>
      <Button appearance="primary" disabled>
        Button
      </Button>
    </div>
  ),
};

export const PolymorphicButton: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Button appearance="primary" as="div">
        Div
      </Button>
      <Button appearance="primary" as="a" href="https://www.google.com">
        Anchor
      </Button>
      <Button appearance="primary" as="span">
        Span
      </Button>
      <Button appearance="primary" as="div" disabled>
        Div
      </Button>
      <Button
        appearance="primary"
        as="a"
        href="https://www.google.com"
        disabled
      >
        Anchor
      </Button>
      <Button appearance="primary" as="span" disabled>
        Span
      </Button>
    </div>
  ),
};
