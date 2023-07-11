import { HTMLAttributes } from "react";

type BoxProps = {
  as?: "div" | "header" | "body" | "section" | "article";
  overflow: "auto" | "clip" | "hidden" | "scroll" | "visible";
  height: string;
  width: string;
  padding: string;
} & HTMLAttributes<HTMLDivElement>;

export type { BoxProps };
