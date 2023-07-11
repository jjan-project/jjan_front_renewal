import styled from "@emotion/styled";

export const Spacing = styled.div<{
  size: number;
  direction?: "horizontal" | "vertical";
}>`
  flex: none;
  width: ${props =>
    props.direction === "horizontal" ? `${props.size}px` : undefined};
  height: ${props =>
    props.direction === "vertical" ? `${props.size}px` : undefined};
`;
