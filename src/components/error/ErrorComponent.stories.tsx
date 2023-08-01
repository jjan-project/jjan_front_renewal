import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import { ErrorComponent } from "./ErrorComponent";
import { ErrorComponentProps } from "./types";

const meta: Meta<typeof ErrorComponent> = {
  title: "ErrorComponent",
  component: ErrorComponent,
};

export default meta;

type Story = StoryObj<typeof ErrorComponent>;

export const Default: Story = (args: ErrorComponentProps) => {
  return <ErrorComponent {...args} />;
};
Default.args = {
  resetError: action("resetError"),
  error: {
    message: "Test Error Message",
    detailMessage: "Test Error Detail Message",
    fixText: "Fix Text",
    func: action("func"),
  },
  errorImg: "/errorTestImg/error.png",
};
