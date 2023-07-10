import { ImgHTMLAttributes } from "react";

import { BaseTest } from "../types/base";

type ImageBaseProps = ImgHTMLAttributes<HTMLImageElement>;

type AvatarProps = ImageBaseProps &
  BaseTest & {
    isDisabled?: boolean;
  };

export { AvatarProps };
