import styled from "@emotion/styled";

import { FlexItemProps } from "./types";

export const FlexItem = styled.div<FlexItemProps>`
  flex: ${({ flex }) => flex};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex-grow: ${({ flexGrow }) => flexGrow};
  flex-basis: ${({ flexBasis }) => flexBasis};
  flex-shrink: ${({ flexShrink }) => flexShrink};
`;
