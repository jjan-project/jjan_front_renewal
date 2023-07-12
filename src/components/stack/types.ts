import { ContentPosition } from "@/components/types";
import { Space } from "@/theme/foundation";

type StackProps = {
  /**
   * The element used for the root node.
   */
  as?: "div" | "span" | "ol" | "ul";
  /**
   * Defines the spacing between the items.
   */
  space?: Space;
  /**
   * Sets the horizontal alignment of the items.
   */
  align?: ContentPosition;
  /**
   * The items to lay out in the stack.
   */
  children?: React.ReactNode;
};

export type { StackProps };
