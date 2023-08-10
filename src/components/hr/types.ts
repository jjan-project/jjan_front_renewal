import type { Color } from "@/theme/foundation";

type HrType = "solid" | "dotted";

interface PropsType {
  type?: HrType;
  backgroundColor?: Color;
}

export type { PropsType };
