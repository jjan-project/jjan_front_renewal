export const colors = {
  white: "#fff",
  black: "#000",
  gray100: "#272729",
  gray200: "#3E3E45",
  gray300: "#4D4D57",
  gray600: "#A6A6B9",
  orange300: "#F2822A",
  violet100: "#5B1FD9",
  violet200: "#6230CB",
  violet400: "#8551F1",
  yellow300: "#FAD40E",
  yellow500: "#FFED47",
} as const;

export type Color = keyof typeof colors;
