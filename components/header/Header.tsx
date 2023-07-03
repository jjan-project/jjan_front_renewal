import React from "react";

import {
  container,
  title,
  leftIconWrapper,
  rightIconWrapper,
} from "./Header.css";
import type { HeadrProps } from "./types";

const Header = (props: HeadrProps) => {
  const { leftIcon, children, rightIcon } = props;

  return (
    <header className={container}>
      <div className={leftIconWrapper}>{leftIcon}</div>
      <div className={title}>{children}</div>
      <div className={rightIconWrapper}>{rightIcon}</div>
    </header>
  );
};

export { Header };
