interface FilterState {
  distance: number;
  memberCnt: number;
  selectedValuesTags: Set<string>;
  selectedValuesAgeRange: Set<string>;
  isCheckedRecent: boolean;
  isCheckedNear: boolean;
}

export type { FilterState };
