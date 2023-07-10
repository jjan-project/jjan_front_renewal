import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { Appearance, ButtonProps } from "./types";

export const Button = styled.button<ButtonProps>`
  // reset button styles
  border: none;
  margin: 0;
  padding: 0;
  width: 100%;

  border-radius: 28px;
  height: 51px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:disabled {
    background: #ddd;
    cursor: unset;
  }

  ${props => getAppearanceStyles(props.appearance as Appearance)}
`;

const getAppearanceStyles = (appearance: Appearance) => {
  switch (appearance) {
    case "secondary":
      return css`
        background: #d9d9d9;
        color: black;
      `;
    default:
      return css`
        background: #5b1fd9;
        color: white;
      `;
  }
};
