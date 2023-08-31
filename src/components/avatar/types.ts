import { ImgHTMLAttributes } from "react";

import { BaseTest } from "../types/base";

type ImageBaseProps = ImgHTMLAttributes<HTMLImageElement>;

type AvatarProps = ImageBaseProps &
  BaseTest & {
    isDisabled?: boolean;
    isCircle?: boolean;
  };

export type { AvatarProps };
