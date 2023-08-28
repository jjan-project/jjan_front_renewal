import React, { forwardRef, ForwardedRef } from "react";

import type { AvatarProps } from "./types";

import "./Avatar.css";

const Avatar = (props: AvatarProps, ref: ForwardedRef<HTMLImageElement>) => {
  const {
    alt = "",
    isDisabled,
    width = "50px",
    height = "50px",
    isCircle = false,
    src,
    testId,
    ...otherProps
  } = props;

  const avatarDisabled = isDisabled ? "img-disabled" : "";

  const avatarCircle = isCircle ? "img-circle" : "";

  return (
    <img
      {...otherProps}
      className={`${avatarDisabled} ${avatarCircle}`}
      alt={alt}
      width={width}
      height={height}
      ref={ref}
      src={src}
      data-testid={testId}
    />
  );
};

const _Avatar = forwardRef(Avatar);
export { _Avatar as Avatar };
