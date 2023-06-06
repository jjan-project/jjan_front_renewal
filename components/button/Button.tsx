import React, { forwardRef } from "react";

import type { PolymorphicRef } from "../types/polymorphic";

import type { ButtonComponent, ButtonPropsWithPolymorphic } from "./types";

const Button: ButtonComponent = forwardRef(
  <C extends React.ElementType = "button">(
    props: ButtonPropsWithPolymorphic<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const { as, children, ...restProps } = props;

    const Element = as || "button";

    return (
      <Element ref={ref} {...restProps}>
        {children}
      </Element>
    );
  },
);

export { Button };
