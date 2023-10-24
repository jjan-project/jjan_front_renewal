import React, { forwardRef } from "react";

import { Skeleton } from "../skeleton";
import { PolymorphicRef } from "../types/polymorphic";

import type { TypoComponent, TypoPropsWithPolymorphic } from "./types";
import * as S from "./Typo.styles";
import { getSkeletonAppearanceStyles } from "./utils";

const Typo: TypoComponent = forwardRef(
  <C extends React.ElementType = "span">(
    props: TypoPropsWithPolymorphic<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const {
      as,
      children,
      appearance = "body1",
      isLoading,
      width,
      ...restProps
    } = props;

    if (isLoading) {
      const appearanceStyles = getSkeletonAppearanceStyles(appearance);

      if (appearanceStyles) {
        return (
          <Skeleton
            trimEdges
            width={width ? width : "100%"}
            height={appearanceStyles.height}
            radius="4px"
          />
        );
      }
    }

    return (
      <S.Typo as={as} ref={ref} appearance={appearance} {...restProps}>
        {children}
      </S.Typo>
    );
  },
);

export { Typo };
