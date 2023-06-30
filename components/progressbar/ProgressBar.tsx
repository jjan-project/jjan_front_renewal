import React from "react";

import { colors } from "../../src/theme/foundation";

type ProgressBarProps = {
  value: number; // 현재 단계
  steps: number; // 전체 단계
};

const ProgressBar: React.FC<ProgressBarProps> = ({ value, steps }) => {
  return (
    <div
      style={{
        height: "5px",
        width: "100%",
        backgroundColor: "#e0e0de",
        borderRadius: "50px",
        overflow: "hidden",
        display: "flex",
      }}
    >
      {Array(steps)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            style={{
              width: `${100 / steps}%`,
              height: "100%",
              backgroundColor:
                i === value ? `${colors.violet200}` : `${colors.gray600}`,
            }}
          />
        ))}
    </div>
  );
};

export { ProgressBar };
