import styled from "@emotion/styled";

import { SpacingProps } from "./types";

export const Spacing = styled.div<SpacingProps>`
  flex: none;
  width: ${props =>
    props.direction === "horizontal" ? props.size : undefined};
  height: ${props => (props.direction === "vertical" ? props.size : undefined)};
  flex-grow: ${props => (props.fill ? 1 : null)};
`;
