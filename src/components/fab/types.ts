import { ReactNode } from "react";

import { Color } from "@/theme/foundation";

type FabStyleProps = {
  width?: string;
  height?: string;
  border?: string;
  borderRadius?: string;
  color?: Color;
  backgroundColor?: Color;
  location?: string;
  boxShadow?: string;
};

type FabBaseProps = {
  children?: ReactNode | string;
  onClick?: () => void;
};

type FabProps = FabStyleProps & FabBaseProps;

export type { FabProps };
