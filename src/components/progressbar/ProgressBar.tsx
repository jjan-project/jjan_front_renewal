import * as S from "./ProgressBar.styles";
import { ProgressBarProps } from "./types";

import { colors } from "@/theme/foundation";

const ProgressBar = (props: ProgressBarProps) => {
  const { curStep, totalSteps, testId } = props;

  return (
    <S.Bar>
      {Array(totalSteps)
        .fill(0)
        .map((_, i) => (
          <S.Step
            key={i}
            curStep={curStep}
            totalSteps={totalSteps}
            data-testid={testId}
            style={{
              backgroundColor:
                i + 1 === curStep ? `${colors.violet200}` : `${colors.gray600}`,
            }}
          />
        ))}
    </S.Bar>
  );
};

export { ProgressBar };
