import styled from "@emotion/styled";

import { CheckBoxStyle } from "./types";

export const CheckBox = styled.input<CheckBoxStyle>`
  appearance: none;
  -webkit-appearance: none;
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
  border: ${props => `2px solid ${props.backgroundColor}`};
  border-radius: ${props => props.borderRadius};
  outline: none;
  cursor: pointer;
  position: relative;
  background-color: transparent;

  &:checked::after {
    content: "";
    width: ${props => props.width && `${props.width - 8}px`};
    height: ${props => props.height && `${props.height - 8}px`};
    border-radius: ${props => props.borderRadius};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${props => props.backgroundColor || "black"};
  }
`;
