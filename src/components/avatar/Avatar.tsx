import { forwardRef, ForwardedRef, useState, useEffect } from "react";

import { Skeleton } from "../skeleton";

import * as S from "./Avatar.styled";
import type { AvatarProps } from "./types";

const Avatar = (props: AvatarProps, ref: ForwardedRef<HTMLImageElement>) => {
  const {
    alt = "",
    isDisabled,
    width = "50px",
    height = "50px",
    isCircle = false,
    src,
    testId,
    isLoading,
    ...otherProps
  } = props;

  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  useEffect(() => {
    if (!src) {
      setImageError(true);
      return;
    }

    setImageError(false);
  }, [src]);

  const Component = imageError ? S.ErrorFallback : S.ImageContainer;

  if (isLoading) {
    return (
      <Skeleton width={width} height={height} radius={isCircle ? "50%" : ""} />
    );
  }

  return (
    <Component
      {...otherProps}
      isDisabled={isDisabled}
      isCircle={isCircle}
      alt={alt}
      width={width}
      height={height}
      ref={ref}
      src={!imageError ? src : undefined}
      data-testid={testId}
      onError={handleImageError}
    />
  );
};

const _Avatar = forwardRef(Avatar);
export { _Avatar as Avatar };
