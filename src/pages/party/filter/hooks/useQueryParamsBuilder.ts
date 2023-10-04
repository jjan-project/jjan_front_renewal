import { FilterState } from "../types";

export const useQueryParamsBuilder = (state: FilterState) => {
  const buildQueryParams = () => {
    const {
      isCheckedRecent,
      selectedValuesTags,
      distance,
      memberCnt,
      selectedValuesAgeRange,
    } = state;

    const sort = isCheckedRecent ? "최신순" : "가까운 위치 순";
    const partyTagList = [...selectedValuesTags];
    const ageTag = [...selectedValuesAgeRange];

    const queryParams = new URLSearchParams();
    queryParams.append("sort", sort);
    queryParams.append("radiusRange", distance.toString());
    queryParams.append("personnelGoe", memberCnt.toString());
    queryParams.append("personnelLoe", (memberCnt + 2).toString());
    if (partyTagList.length)
      queryParams.append("partyTagList", JSON.stringify(partyTagList));
    if (ageTag.length) queryParams.append("ageTag", JSON.stringify(ageTag));

    return queryParams;
  };

  return { buildQueryParams };
};
