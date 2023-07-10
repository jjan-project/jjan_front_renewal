import { Meta, StoryObj } from "@storybook/react";

import { ProgressBar } from "./ProgressBar";
import useProgressBar from "./useProgressBar";

const meta: Meta<typeof ProgressBar> = {
  title: "ProgressBar",
  component: ProgressBar,
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  render: () => {
    const { step, setGaugeUp, setGaugeDown } = useProgressBar(1, 5);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <ProgressBar curStep={step} totalSteps={5} />
        <p>Current Step : {step}</p>
        <button onClick={setGaugeUp}>up</button>
        <button onClick={setGaugeDown}>down</button>
      </div>
    );
  },
};
