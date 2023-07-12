import styled from "@emotion/styled";

import { FlexProps } from "./types";

export const Flex = styled.div<Omit<FlexProps, "children">>`
  display: flex;
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex-grow: ${({ flexGrow }) => flexGrow};
  flex-basis: ${({ flexBasis }) => flexBasis};
  flex-shrink: ${({ flexShrink }) => flexShrink};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  gap: ${({ gap }) => gap};
  width: 100%;
  height: 100%;
`;
