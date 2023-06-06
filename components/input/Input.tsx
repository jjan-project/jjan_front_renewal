import React, { forwardRef } from "react";
import type { Ref } from "react";

import { InputBaseProps, InputProps } from "./types";

const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(
  (props: InputBaseProps, ref?: Ref<HTMLInputElement>) => {
    return <input ref={ref} {...props} />;
  },
);

const Input = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref?: Ref<HTMLInputElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { isValid } = props;

    return <InputBase ref={ref} {...props} />;
  },
);

export { Input };
