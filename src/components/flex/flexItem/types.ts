import { ReactNode } from "react";

import { CSSPropertyFlexWrap } from "@/components/types";

type FlexItemProps = {
  flex?: string;
  flexWrap?: CSSPropertyFlexWrap;
  flexBasis?: string;
  flexGrow?: string;
  flexShrink?: string;
  children: ReactNode;
};

export type { FlexItemProps };
