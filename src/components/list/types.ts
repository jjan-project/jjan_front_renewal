import { ReactNode } from "react";

type Overflow =
  | "visible"
  | "hidden"
  | "scroll"
  | "auto"
  | "initial"
  | "inherit";

type ListProps = {
  /**
   * The height of the List Box. The default is '100%'.
   */
  height?: string;

  /**
   * The overflow property of the List Box. It can be 'visible', 'hidden', 'scroll', 'auto', 'initial', or 'inherit'.
   */
  overflow?: Overflow;

  /**
   * The gap property specifies the size of the gap (i.e., the empty space) between flex items.
   */
  gap?: string;

  /**
   * The direction property specifies whether the flex items are laid out in a column or a row.
   * @default 'column'
   */
  direction?: "column" | "row";

  /**
   * A render prop is a function prop that a component uses to know what to render.
   */
  children?: ReactNode;

  hideScrollbar?: boolean;
};

export type { Overflow, ListProps };
