import React, { forwardRef } from "react";

import type { PolymorphicRef } from "../types/polymorphic";

import { varients, disabledMap } from "./Button.css";
import type { ButtonComponent, ButtonPropsWithPolymorphic } from "./types";

const Button: ButtonComponent = forwardRef(
  <C extends React.ElementType = "button">(
    props: ButtonPropsWithPolymorphic<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const {
      as,
      children,
      appearance = "primary",
      disabled,
      onClick,
      ...restProps
    } = props;

    const Element = as || "button";
    let styles;

    /**
     * When the 'disabled' attribute is set to true on an anchor ('<a>') element,
     * The click event associated with this element should be disabled to prevent user interaction.
     */
    const handleClick = e => {
      if (disabled) {
        e.preventDefault();
        return;
      }

      onClick?.(e);
    };

    if (disabled) {
      styles = {
        background: disabledMap[appearance].background,
        cursor: disabledMap[appearance].cursor,
      };
    } else {
      styles = null;
    }

    return (
      <Element
        ref={ref}
        className={varients[appearance]}
        style={styles}
        disabled={disabled}
        onClick={handleClick}
        {...restProps}
      >
        {children}
      </Element>
    );
  },
);

export { Button };
