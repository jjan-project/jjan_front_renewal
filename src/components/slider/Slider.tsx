import type { ChangeEventHandler } from "react";

import * as S from "./Slider.styles";
import { SliderProps } from "./types";

const Slider = (props: SliderProps) => {
  const { min, max, step, value, setValue, testId, ...restProps } = props;

  const progressStyle = {
    width: `${((value - min) / (max - min)) * 100}%`,
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    setValue(parseInt(e.target.value));
  };

  return (
    <S.Container>
      <S.Bar>
        <S.Fill style={progressStyle}></S.Fill>
      </S.Bar>
      <S.Slider
        className="slider"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        data-testid={testId}
        {...restProps}
      />
    </S.Container>
  );
};

export { Slider };
