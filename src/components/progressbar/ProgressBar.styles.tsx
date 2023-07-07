import styled from "@emotion/styled";

import { ProgressBarProps } from "./types";

export const Bar = styled.div`
  height: 5px;
  width: 100%;
  background-color: #e0e0de;
  border-radius: 50px;
  overflow: hidden;
  display: flex;
`;

export const Step = styled.div<ProgressBarProps>`
  width: ${({ curStep }) => 100 / curStep}%;
  height: 100%;
`;
