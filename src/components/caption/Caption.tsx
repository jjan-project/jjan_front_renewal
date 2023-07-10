import { Typo } from "../typo";

import { LabelProps } from "./types";

const Caption = (props: LabelProps) => {
  const { htmlFor, color, children } = props;

  return (
    <label htmlFor={htmlFor}>
      <Typo appearance="body3" color={color}>
        {children}
      </Typo>
    </label>
  );
};

export { Caption };
