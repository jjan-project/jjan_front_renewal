import { assignInlineVars } from "@vanilla-extract/dynamic";
import React, { forwardRef } from "react";

import { colors } from "../../src/theme/foundation";
import type { PolymorphicRef } from "../types/polymorphic";

import type { TextComponent, TextPropsWithPolymorphic } from "./types";
import { themeVars, varients } from "./Typo.css";

const Typo: TextComponent = forwardRef(
  <C extends React.ElementType = "span">(
    props: TextPropsWithPolymorphic<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const { as, children, appearance, color = "black", ...restProps } = props;

    const Element = as || "span";

    return (
      <Element
        ref={ref}
        className={varients[appearance]}
        style={assignInlineVars(themeVars, {
          color: { text: colors[color] },
        })}
        {...restProps}
      >
        {children}
      </Element>
    );
  },
);

export { Typo };
