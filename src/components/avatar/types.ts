import { ImgHTMLAttributes } from "react";

import { BaseTest } from "../types/base";

type ImageBaseProps = ImgHTMLAttributes<HTMLImageElement>;

type SkeletonAvatarProps = {
  isLoading?: boolean;
};

type AvatarProps = ImageBaseProps &
  BaseTest &
  SkeletonAvatarProps & {
    isDisabled?: boolean;
    isCircle?: boolean;
  };

export type { AvatarProps };
