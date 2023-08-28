import styled from "@emotion/styled";

import { colors } from "@/theme/foundation";

export const Selectionbox = styled.label<{ checked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  border-radius: 18px;
  padding: 4px 20px;
  cursor: pointer;
  background: ${({ checked }) => (checked ? colors.violet100 : colors.gray400)};
`;
