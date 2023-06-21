import type { Color } from "../../src/theme/foundation";
import { PolymorphicComponentPropWithRef } from "../types/polymorphic";

type TextProps = {
  appearance: "header1" | "header2" | "body1" | "body2" | "body3";
  color?: Color;
};

type TextPropsWithPolymorphic<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C, TextProps>;

type TextComponent = <C extends React.ElementType = "span">(
  props: TextPropsWithPolymorphic<C>,
) => React.ReactElement | null;

export type { TextProps, TextPropsWithPolymorphic, TextComponent };
