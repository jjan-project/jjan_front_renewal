import React from "react";

import { BoxProps } from "./types";

const Box = (props: BoxProps) => {
  const { children, ...restProps } = props;

  return <div style={restProps}>{children}</div>;
};

export { Box };
