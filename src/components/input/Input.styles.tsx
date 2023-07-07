import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { Appearance } from "./types";

import { breakpoints } from "@/theme/foundation";

export const InputReset = styled.input`
  background-color: initial;
  border: none;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  outline: none;
`;

export const Container = styled.div<{ appearance: Appearance }>`
  ${props => getAppearanceStyles(props.appearance as Appearance)}
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
`;

export const Label = styled.div`
  @media screen and (min-width: ${breakpoints.xs}) {
    width: 45%;
  }
  @media screen and (min-width: ${breakpoints.sm}) {
    width: 35%;
  }
  @media screen and (min-width: ${breakpoints.md}) {
    width: 25%;
  }
  @media screen and (min-width: ${breakpoints.lg}) {
    width: 10%;
  }
`;

export const getAppearanceStyles = (appearance: Appearance) => {
  switch (appearance) {
    case "outline":
      return css`
        border: 1px solid #000000;
        display: flex;
        align-items: center;
        padding: 8px;
        gap: 8px;
      `;
    case "filled":
      return css`
        display: flex;
        border: none;
        border-radius: 30px;
        background: lightgray;
        align-items: center;
        padding: 16px;
        gap: 8px;
      `;
    default:
      return css`
        border-bottom: 2px solid #ddd;
        padding-bottom: 0.1rem;
        display: flex;
        align-items: center;
        gap: 8px;
      `;
  }
};
