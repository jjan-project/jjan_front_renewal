import { Box } from "@/components/box";
import type { Color } from "@/theme/foundation";

type HrType = "solid" | "dotted";

interface PropsType {
  type?: HrType;
  backgroundColor?: Color;
}

const Hr = ({ type = "solid", backgroundColor = "gray700" }: PropsType) => {
  if (type === "dotted") {
    return (
      <div style={{ display: "flex", gap: "8px", overflowX: "clip" }}>
        {Array.from({ length: 100 }).map((_, index) => (
          <Box
            key={index}
            width="9px"
            height="1px"
            backgroundColor={backgroundColor}
            style={{ flexShrink: 0 }}
          />
        ))}
      </div>
    );
  }

  return <Box width="100%" height="1px" backgroundColor={backgroundColor} />;
};

export { Hr };
