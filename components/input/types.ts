import type { InputHTMLAttributes } from "react";

import { BaseTest } from "../types/base";

type InputBaseProps = InputHTMLAttributes<HTMLInputElement>;

type InputProps = InputBaseProps &
  BaseTest & {
    appearance: "outline" | "underline" | "filled";
    isValid?: boolean;
    icon?: JSX.Element;
    label?: string;
    labelPostion?: "inner" | "outer";
  };

export type { InputBaseProps, InputProps };
