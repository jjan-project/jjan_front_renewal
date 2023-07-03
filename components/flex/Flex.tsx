import React from "react";

import { base } from "./style.css";
import { FlexProps } from "./types";

const Flex = (props: FlexProps) => {
  const { children, ...restProps } = props;

  return (
    <div className={base} style={restProps}>
      {children}
    </div>
  );
};

export { Flex };
