import { css } from "@emotion/react";
import styled from "@emotion/styled";

import type { Appearance, TypoProps } from "./types";

import { colors, fontSize, fontWeight, lineHeight } from "@/theme/foundation";
import type { Color } from "@/theme/foundation";

export const Typo = styled.span<TypoProps>`
  ${props => getColorStyles(props.color as Color)};
  ${props => getAppearanceStyles(props.appearance as Appearance)};
`;

const getAppearanceStyles = (appearance: Appearance) => {
  switch (appearance) {
    case "body1":
      return css`
        font-size: ${fontSize[15]};
        font-weight: ${fontWeight[400]};
        line-height: ${lineHeight[25]};
      `;
    case "body2":
      return css`
        font-size: ${fontSize[13]};
        font-weight: ${fontWeight[400]};
        line-height: ${lineHeight[23]};
      `;
    case "body3":
      return css`
        font-size: ${fontSize[10]};
        font-weight: ${fontWeight[400]};
        line-height: ${lineHeight[20]};
      `;
    case "header1":
      return css`
        font-size: ${fontSize[21]};
        font-weight: ${fontWeight[400]};
        line-height: ${lineHeight[31]};
      `;
    case "header2":
      return css`
        font-size: ${fontSize[18]};
        font-weight: ${fontWeight[400]};
        line-height: ${lineHeight[28]};
      `;
    default:
      return css`
        font-size: ${fontSize[7]};
        font-weight: ${fontWeight[400]};
        line-height: ${lineHeight[17]};
      `;
  }
};

const getColorStyles = (name: Color) => {
  return css`
    color: ${colors[name]};
  `;
};
