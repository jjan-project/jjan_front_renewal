import type { InputHTMLAttributes } from "react";

import { BaseTest } from "../types/base";

type SliderOmitProps = "type" | "min" | "max" | "step" | "value";

type SliderProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  SliderOmitProps
> &
  BaseTest & {
    /**
     * The minimum value of the slider
     */
    min: number;
    /**
     * The maximum value of the slider
     */
    max: number;
    /**
     * The increment between valid values of the slider
     */
    step?: number;
    /**
     * The current value of the slider
     */
    value: number;
    /**
     * Function to update the value of the slider
     */
    setValue: (value: number) => void;
  };

export type { SliderProps };
