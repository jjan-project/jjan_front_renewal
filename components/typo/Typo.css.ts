import {
  style,
  createThemeContract,
  styleVariants,
} from "@vanilla-extract/css";

export const themeVars = createThemeContract({
  color: {
    text: null,
  },
});

export const base = style({
  color: themeVars.color.text,
});

const varients = styleVariants({
  header1: [
    base,
    {
      fontWeight: "700",
      fontSize: "18px",
      lineHeight: "24px",
      letterSpacing: "-0.4px",
    },
  ],
  header2: [
    base,
    {
      fontWeight: "700",
      fontSize: "16px",
      lineHeight: "20px",
      letterSpacing: "-0.4px",
    },
  ],
  body1: [
    base,
    {
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "20px",
      letterSpacing: "-0.4px",
    },
  ],
  body2: [
    base,
    {
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "18px",
      letterSpacing: "0px",
    },
  ],
  body3: [
    base,
    {
      fontWeight: "500",
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0px",
    },
  ],
});

export { varients };
