import { HTMLAttributes } from "react";

type BoxProps = {
  /**
   * Defines the HTML element used for the root node.
   */
  as?: "div" | "header" | "body" | "section" | "article";

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
} & HTMLAttributes<HTMLDivElement>;

export type { BoxProps };
