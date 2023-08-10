import { HTMLAttributes } from "react";

import type { Color } from "@/theme/foundation";

type BoxProps = {
  /**
   * Defines the HTML element used for the root node.
   */
  as?: "div" | "header" | "body" | "section" | "article" | "footer";

  /**
   * Specifies the preferred type of scrolling for the element.
   */
  overflow?: "auto" | "clip" | "hidden" | "scroll" | "visible";

  /**
   * Defines the height of the element.
   */
  height?: string;

  /**
   * Defines the width of the element.
   */
  width?: string;

  /**
   * Defines the padding space on all sides of the element.
   */
  padding?: string;

  /**
   * If true, aligns the content at the center of the element.
   */
  centerContent?: boolean;

  /**
   * Defines the background color of the element.
   */
  backgroundColor?: Color;

  /**
   * Defines the border radius of the element.
   */
  borderRadius?: string;
} & HTMLAttributes<HTMLDivElement>;

export type { BoxProps };
