import { Meta } from "@storybook/react";

import { Fab } from "./Fab";
import type { FabProps } from "./types";

export default {
  title: "Fab",
  component: Fab,
} as Meta;

export const Default = (args: FabProps) => {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        position: "relative",
        backgroundColor: "wheat",
      }}
    >
      <Fab {...args}>X</Fab>
    </div>
  );
};
Default.args = {
  location: "50 30 40 20",
  border: "1px solid black",
  boxShadow: "0 4px 5px 1px rgba(0, 0, 0, 0.3)",
  color: "black",
  backgroundColor: "white",
};
