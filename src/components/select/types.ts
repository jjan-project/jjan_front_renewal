import { HTMLAttributes } from "react";

import { BaseTest } from "../types/base";

type SelectOption<T> = {
  label: string;
  value: T;
};

type SelectProps<T> = HTMLAttributes<HTMLDivElement> &
  BaseTest & {
    /**
     * Array of option objects to display in the select dropdown.
     */
    options: SelectOption<T>[];
    /**
     * Optional default selected option object.
     */
    value?: SelectOption<T>;
    /**
     * A function that is called whenever the select input's value changes.
     */
    onChange: (value?: SelectOption<T>) => void;
  };

export type { SelectOption, SelectProps };
