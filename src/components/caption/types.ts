import type { HTMLAttributes } from "react";

import { BaseTest } from "../types/base";

import { Color } from "@/theme/foundation";

type LabelProps = Omit<HTMLAttributes<HTMLLabelElement>, "htmlFor"> &
  BaseTest & {
    htmlFor: string;
    color: Color;
    children: string;
  };

export type { LabelProps };
