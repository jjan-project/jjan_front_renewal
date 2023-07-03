import { style } from "@vanilla-extract/css";

const container = style({
  display: "flex",
  // padding: "10px",
  justifyContent: "space-between",
  alignItems: "center",
});

const title = style({
  width: "60%",
  textAlign: "center",
});

const leftIconWrapper = style({
  width: "20%",
});

const rightIconWrapper = style({
  width: "20%",
  textAlign: "right",
});

export { container, title, leftIconWrapper, rightIconWrapper };
