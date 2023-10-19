import styled from "@emotion/styled";

import { SkeletonProps } from "./types";

import { colors } from "@/theme/foundation";

export const Container = styled.div<SkeletonProps>`
  width: ${props =>
    typeof props.width === "number" ? `${props.width}px` : props.width};
  height: ${props =>
    typeof props.height === "number" ? `${props.height}px` : props.height};
  border-radius: ${props => props.radius};
`;

export const Div = styled.div<Pick<SkeletonProps, "radius" | "trimEdges">>`
  position: relative;
  background: ${props =>
    props.trimEdges
      ? `
  linear-gradient(
    to bottom,
    transparent 0%,
    ${colors.gray800} 15%,
    ${colors.gray800} 85%,
    transparent 100%
  )`
      : colors.gray800};
  border-radius: ${props => props.radius};
  height: 100%;
`;

export const Bar = styled.div`
  position: absolute;
  left: -100px;
  width: 40px;
  height: 100%;
  background: ${colors.white};
  transform: rotate(15deg);
  filter: blur(35px);
  animation: skeletonMove 1s infinite;

  @keyframes skeletonMove {
    from {
      left: -100px;
    }
    to {
      left: calc(100% + 100px);
    }
  }
`;
