import React, { forwardRef } from "react";

import { PolymorphicRef } from "../types/polymorphic";

import type { TypoComponent, TypoPropsWithPolymorphic } from "./types";
import * as S from "./Typo.styles";

const Typo: TypoComponent = forwardRef(
  <C extends React.ElementType = "span">(
    props: TypoPropsWithPolymorphic<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const { as, children, appearance = "body1", ...restProps } = props;

    return (
      <S.Typo as={as} ref={ref} appearance={appearance} {...restProps}>
        {children}
      </S.Typo>
    );
  },
);

export { Typo };
