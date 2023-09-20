import { useState } from "react";

import * as S from "./Selectionbox.styles";
import { SelectionboxProps } from "./types";

import { Cluster } from "@/components/cluster";
import { Typo } from "@/components/typo";

const Selectionbox = (props: SelectionboxProps) => {
  const { options, defaultValues, onChange } = props;

  const [selectedValues, setSelectedValues] = useState<Set<string>>(
    defaultValues || new Set(),
  );

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
        <S.Selectionbox
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
        </S.Selectionbox>
      ))}
    </Cluster>
  );
};

export { Selectionbox };
