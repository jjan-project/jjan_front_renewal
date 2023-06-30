import { style } from "@vanilla-extract/css";

const container = style({
  width: "233px",
  height: "233px",
  borderRadius: "50%",
  display: "flex",
  overflow: "hidden",
  alignItems: "center",
  justifyContent: "center",
});

const img = style({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

const fallback = style({
  width: "100%",
  height: "100%",
  background: "#D9D9D9",
});

export { container, img, fallback };
