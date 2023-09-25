import { useState } from "react";

import { FilterState } from "../types";

export const useFilterState = (initialState: FilterState) => {
  const [state, setState] = useState<FilterState>(initialState);

  const handleToggle = (keyOne: string, keyTwo: string, checked: boolean) => {
    setState(prev => ({
      ...prev,
      [keyOne]: checked,
      [keyTwo]: !checked,
    }));
  };

  const handleSelectionboxChange = (
    key: "selectedValuesTags" | "selectedValuesAgeRange",
    values: string[],
  ) => {
    setState(prev => ({ ...prev, [key]: new Set(values) }));
  };

  return { state, handleToggle, handleSelectionboxChange, setState };
};
