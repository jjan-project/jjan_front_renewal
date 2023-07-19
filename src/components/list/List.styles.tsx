import styled from "@emotion/styled";

import { ListProps } from "./types";

export const List = styled.div<ListProps>`
  display: flex;
  flex-direction: ${props => props.direction || "column"};
  gap: ${props => props.gap || 0};
  height: ${props => props.height || "100%"};
  overflow: ${props => props.overflow || "auto"};
`;
