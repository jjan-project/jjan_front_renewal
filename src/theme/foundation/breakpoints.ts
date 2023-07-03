export const breakpoints = {
  xs: "280px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px",
} as const;

export type Breakpoint = keyof typeof breakpoints;
