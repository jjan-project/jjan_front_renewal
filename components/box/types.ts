import type { ReactNode } from "react";

import { Color, Space } from "../../src/theme/foundation";

type ReactChildrenNode = {
  children: ReactNode;
};

type ReactCSSProperties = {
  style?: React.CSSProperties;
};

export type BoxProps = {
  color?: Color;
  backgroundColor?: Color;
  width?: string;
  height?: string;
  minWidth?: string;
  minHeight?: string;
  display?: string;
  border?: string;
  overflow?: string;
  margin?: Space;
  marginTop?: Space;
  marginRight?: Space;
  marginBottom?: Space;
  marginLeft?: Space;
  padding?: Space;
  paddingTop?: Space;
  paddingRight?: Space;
  paddingBottom?: Space;
  paddingLeft?: Space;
} & ReactChildrenNode &
  ReactCSSProperties;
