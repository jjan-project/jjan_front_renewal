import { HTMLAttributes } from "react";

type SpacingProps = {
  children?: never;
  direction?: "horizontal" | "vertical";
  size: number;
} & HTMLAttributes<HTMLDivElement>;

export type { SpacingProps };
