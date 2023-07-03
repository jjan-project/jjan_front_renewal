import React, { useState } from "react";

import "./select.css";
import { SelectOption, SelectProps } from "./types";

const Select = <T,>(props: SelectProps<T>) => {
  const { options, value, onChange, testId } = props;
  const [isOpen, setIsOpen] = useState(false);

  const selectOption = (option: SelectOption<T>) => {
    if (option !== value) onChange(option);
  };

  return (
    <div
      tabIndex={0}
      className="container"
      onClick={() => setIsOpen(prev => !prev)}
      onBlur={() => {
        setIsOpen(false);
      }}
      data-testid={testId}
    >
      <span className="value">{value?.label}</span>
      <div className="caret"></div>
      <ul className={`options ${isOpen ? "show" : ""}`}>
        {options.map((option, index) => (
          <li
            className="option"
            key={index}
            onClick={e => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Select };
