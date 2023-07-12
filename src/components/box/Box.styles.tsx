import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { BoxProps } from "./types";

export const Box = styled.div<Omit<BoxProps, "as">>`
  overflow: ${({ overflow }) => overflow};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  ${({ centerContent }) => (centerContent ? getCenterStyls() : null)};
`;

const getCenterStyls = () => {
  return css`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
};
