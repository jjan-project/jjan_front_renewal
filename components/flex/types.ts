import type { BoxProps } from "../box";
import type {
  CSSPropertyAlignContent,
  CSSPropertyAlignItems,
  CSSPropertyAlignSelf,
  CSSPropertyFlexDirection,
  CSSPropertyFlexWrap,
  CSSPropertyJustifyContent,
  CSSPropertyJustifyItems,
  CSSPropertyJustifySelf,
} from "../types/styles";

export type FlexProps = {
  alignItems?: CSSPropertyAlignItems;
  alignContent?: CSSPropertyAlignContent;
  justifyContent?: CSSPropertyJustifyContent;
  justifyItems?: CSSPropertyJustifyItems;
  flexWrap?: CSSPropertyFlexWrap;
  flexBasis?: string;
  flexDirection?: CSSPropertyFlexDirection;
  flexGrow?: string;
  flexShrink?: string;
  justifySelf?: CSSPropertyJustifySelf;
  alignSelf?: CSSPropertyAlignSelf;
  order?: string;
  gap?: string;
} & BoxProps;
