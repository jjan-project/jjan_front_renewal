export const colors = {
  white: "#fff",
  black: "#000",
  gray100: "#272729",
  gray200: "#3E3E45",
  gray300: "#4D4D57",
  gray400: "#D9D9D9",
  gray600: "#A6A6B9",
  gray700: "#C4C4C4",
  gray800: "#D9D9D9",
  green175: "#AFF73C",
  orange300: "#F2822A",
  violet100: "#5B1FD9",
  violet200: "#6230CB",
  violet400: "#8551F1",
  yellow300: "#FAD40E",
  yellow500: "#FFED47",
} as const;

export type Color = keyof typeof colors;
