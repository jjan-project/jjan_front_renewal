import { TextareaHTMLAttributes } from "react";

import { BaseTest } from "../types/base";

type TextAreaBaseProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

type TextAreaProps = TextAreaBaseProps &
  BaseTest & {
    width?: string;
    height?: string;
  };

export type { TextAreaProps };
