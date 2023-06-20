import React from "react";
import type { ChangeEventHandler } from "react";

import "./Slider.css";
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
    <div className="slider-container">
      <span className="bar">
        <span className="fill" style={progressStyle}></span>
      </span>
      <input
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
    </div>
  );
};

export { Slider };
