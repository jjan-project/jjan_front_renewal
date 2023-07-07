import React, { ReactEventHandler, forwardRef } from "react";

import { PolymorphicRef } from "../types/polymorphic";

import * as S from "./Button.styles";
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

    /**
     * When the 'disabled' attribute is set to true on an anchor ('<a>') element,
     * The click event associated with this element should be disabled to prevent user interaction.
     */
    const handleClick: ReactEventHandler = e => {
      if (disabled) {
        e.preventDefault();
        return;
      }

      onClick?.(e);
    };

    const styles = disabled
      ? {
          background: "#ddd",
          cursor: "unset",
        }
      : null;

    return (
      <S.Button
        as={as}
        ref={ref}
        appearance={appearance}
        onClick={handleClick}
        disabled={disabled}
        style={styles as React.CSSProperties}
        {...restProps}
      >
        {children}
      </S.Button>
    );
  },
);

export { Button };
