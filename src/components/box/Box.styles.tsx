import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { BoxProps } from "./types";

import { colors } from "@/theme/foundation";

export const Box = styled.div<Omit<BoxProps, "as">>`
  box-sizing: border-box;
  overflow: ${({ overflow }) => overflow};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? colors[backgroundColor] : null};
  border-radius: ${({ borderRadius }) => borderRadius};
  ${({ centerContent }) => (centerContent ? getCenterStyls() : null)};
`;

const getCenterStyls = () => {
  return css`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
};
