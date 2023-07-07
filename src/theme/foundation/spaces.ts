export const spaces = {
  space01: "4px",
  space02: "8px",
  space03: "12px",
  space04: "16px",
  space05: "20px",
  space06: "24px",
  space07: "28px",
  space08: "32px",
} as const;

export type Space = keyof typeof spaces;
