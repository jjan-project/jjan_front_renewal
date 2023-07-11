import styled from "@emotion/styled/";

import { StackAlign } from "./types";

import { Space } from "@/theme/foundation";

export const Stack = styled.div<{ space?: Space; align?: StackAlign }>`
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.align ? props.align : undefined)};
  gap: ${props => (props.space ? props.space : undefined)};
`;
