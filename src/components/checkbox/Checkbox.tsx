import { useState } from "react";

import * as S from "./Checkbox.styles";
import { CheckboxProps } from "./types";

import { Cluster } from "@/components/cluster";
import { Typo } from "@/components/typo";

const Checkbox = (props: CheckboxProps) => {
  const { options, onChange } = props;

  const [selectedValues, setSelectedValues] = useState<Set<string>>(new Set());

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedSelectedValues = new Set(selectedValues);
    const { value, checked } = event.target;

    if (checked) {
      updatedSelectedValues.add(value);
    } else {
      updatedSelectedValues.delete(value);
    }

    setSelectedValues(updatedSelectedValues);

    if (onChange) {
      onChange(Array.from(updatedSelectedValues));
    }
  };

  return (
    <Cluster gap="10px">
      {options.map((option, index) => (
        <S.Checkbox
          key={index}
          checked={selectedValues.has(option)}
          role="checkbox"
        >
          <Typo
            appearance="body2"
            color={selectedValues.has(option) ? "white" : "black"}
          >
            {option}
          </Typo>
          <input
            type="checkbox"
            value={option}
            onChange={handleCheckboxChange}
            checked={selectedValues.has(option)}
            style={{
              display: "none",
            }}
          />
        </S.Checkbox>
      ))}
    </Cluster>
  );
};

export { Checkbox };
