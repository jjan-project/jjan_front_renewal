import type { InputHTMLAttributes } from "react";

import { BaseTest } from "../types/base";

type InputBaseProps = InputHTMLAttributes<HTMLInputElement>;

type Appearance = "outline" | "underline" | "filled";

type InputProps = InputBaseProps &
  BaseTest & {
    /**
     * Appearance of the component, which can be one of the three values: "outline", "underline", or "filled".
     * @default "underline"
     */
    appearance: Appearance;
    /**
     * A flag to specify whether the component's current state is valid.
     * This is optional and can be used for form validation purposes.
     */
    isValid?: boolean;
    /**
     * An optional JSX element to display an icon within the component.
     */
    icon?: JSX.Element;
    /**
     * An optional label for the component.
     */
    label?: string;
    /**
     * The position of the label. It can be either "inner" or "outer".
     * @default "inner"
     */
    labelPostion?: "inner" | "outer";
  };

export type { InputBaseProps, Appearance, InputProps };
