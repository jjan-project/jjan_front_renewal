import styled from "@emotion/styled";

import { StackProps } from "./types";

import { spaces } from "@/theme/foundation";

export const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align};
  gap: ${({ space }) => (space ? spaces[space] : undefined)};
`;
