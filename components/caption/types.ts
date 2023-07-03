import type { HTMLAttributes } from "react";

import { Color } from "../../src/theme/foundation";
import { BaseTest } from "../types/base";

type LabelProps = Omit<HTMLAttributes<HTMLLabelElement>, "htmlFor"> &
  BaseTest & {
    htmlFor: string;
    color: Color;
    children: string;
  };

export type { LabelProps };
