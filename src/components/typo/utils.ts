import { Appearance } from "./types";

import { lineHeight } from "@/theme/foundation";

export const getSkeletonAppearanceStyles = (appearance: Appearance) => {
  switch (appearance) {
    case "body1":
      return {
        height: lineHeight[25],
      };
    case "body2":
      return {
        height: lineHeight[23],
      };
    case "body3":
      return {
        height: lineHeight[20],
      };
    case "header1":
      return {
        height: lineHeight[31],
      };
    case "header2":
      return {
        height: lineHeight[28],
      };
  }
};
