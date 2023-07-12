import { HTMLAttributes } from "react";

type SpacingProps = {
  /**
   * The direction in which the space will be applied.
   */
  direction?: "horizontal" | "vertical";
  /**
   * The size of the space to be applied.
   */
  size: string;
} & HTMLAttributes<HTMLDivElement>;

export type { SpacingProps };
