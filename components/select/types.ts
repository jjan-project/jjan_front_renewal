import { HTMLAttributes } from "react";

import { BaseTest } from "../types/base";

type SelectOption = {
  label: string;
  value: string | number;
};

type SelectProps = HTMLAttributes<HTMLDivElement> &
  BaseTest & {
    /**
     * Array of option objects to display in the select dropdown.
     */
    options: SelectOption[];
    /**
     * Optional default selected option object.
     */
    value?: SelectOption;
    /**
     * A function that is called whenever the select input's value changes.
     */
    onChange: (value?: SelectOption) => void;
  };

export type { SelectOption, SelectProps };
