import styled from "@emotion/styled";

import { FabProps } from "./types";

import { colors } from "@/theme/foundation";

export const FabButton = styled.button<FabProps>`
  width: ${props => props.width || "56px"};
  height: ${props => props.height || "56px"};
  border: ${props => props.border || "none"};
  border-radius: ${props => props.borderRadius || "50%"};
  color: ${props => props.color || colors.white};
  background-color: ${props => props.backgroundColor || colors.violet100};
  box-shadow: ${props => props.boxShadow || "none"};
  cursor: pointer;
  position: absolute;

  ${props => {
    const [top, right, bottom, left] = props.location?.split(" ") || [];
    return `
    ${top ? `top: ${top}px;` : ""}
    ${right ? `right: ${right}px;` : ""}
    ${bottom ? `bottom: ${bottom}px;` : ""}
    ${left ? `left: ${left}px;` : ""}
  `;
  }}
`;
