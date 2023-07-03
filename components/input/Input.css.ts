import { styleVariants, style } from "@vanilla-extract/css";

import { breakpoints } from "@/theme/foundation";

const textInput = style({
  backgroundColor: "initial",
  border: "none",
  margin: 0,
  padding: 0,
  width: "100%",
  height: "100%",
  outline: "none",
  fontFamily: "pretendard",
});

const content = style({
  display: "flex",
  alignItems: "flex-end",
  flexGrow: "1",
});

const label = style({
  "@media": {
    [`screen and (min-width: ${breakpoints.xs})`]: {
      width: "45%",
    },
    [`screen and (min-width: ${breakpoints.sm})`]: {
      width: "35%",
    },
    [`screen and (min-width: ${breakpoints.md})`]: {
      width: "25%",
    },
    [`screen and (min-width: ${breakpoints.lg})`]: {
      width: "10%",
    },
  },
});

const varients = styleVariants({
  outline: {
    border: "1px solid #000000",
    display: "flex",
    alignItems: "center",
    padding: "8px",
    gap: "8px",
  },
  underline: {
    borderBottom: "2px solid #ddd",
    paddingBottom: "0.1rem",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  filled: {
    display: "flex",
    border: "none",
    borderRadius: "30px",
    background: "lightgray",
    alignItems: "center",
    padding: "16px",
    gap: "8px",
  },
});

export { label, content, textInput, varients };
