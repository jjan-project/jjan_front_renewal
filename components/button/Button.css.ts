import { style, styleVariants } from "@vanilla-extract/css";

const base = style({
  border: "none",
  margin: 0,
  padding: 0,
  width: "auto",
  overflow: "visible",
  background: "transparent",

  color: "inherit",
  font: "inherit",

  lineHeight: "normal",

  WebkitFontSmoothing: "inherit",
  MozOsxFontSmoothing: "inherit",

  appearance: "none",
});

// for inline styling
const disabledMap = {
  primary: {
    background: "#DDDDDD",
    cursor: "not-allowed",
  },
};

const varients = styleVariants({
  primary: [
    base,
    {
      background: "#6230CB",
      border: "none",
      borderRadius: "28px",
      height: "51px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0px 15px",
      gap: "10px",
      color: "white",
      cursor: "pointer",
      ":disabled": {
        background: "#DDDDDD",
        cursor: "unset",
      },
    },
  ],
});

export { varients, disabledMap };
