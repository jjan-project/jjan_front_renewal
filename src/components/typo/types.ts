import { ReactNode } from "react";

import { PolymorphicComponentPropWithRef } from "../types/polymorphic";

import { Color } from "@/theme/foundation";

type Appearance = "header1" | "header2" | "body1" | "body2" | "body3" | "info1";

type TypoProps = {
  appearance: Appearance;
  color?: Color;
};

type TypoPropsWithPolymorphic<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C, TypoProps>;

type TypoComponent = <C extends React.ElementType = "span">(
  props: TypoPropsWithPolymorphic<C>,
) => ReactNode;

export type { Appearance, TypoProps, TypoPropsWithPolymorphic, TypoComponent };
