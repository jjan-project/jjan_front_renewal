import { useSearchParams } from "react-router-dom";

const usePartyFilterParams = () => {
  const [searchParams] = useSearchParams();

  const getJsonParam = (key: string) => {
    const param = searchParams.get(key);
    return param !== null ? JSON.parse(param) : undefined;
  };

  return {
    sort: searchParams.get("sort"),
    partyTagList: getJsonParam("partyTagList"),
    radiusRange: searchParams.get("radiusRange"),
    personnelGoe: searchParams.get("personnelGoe"),
    personnelLoe: searchParams.get("personnelLoe"),
    ageTag: getJsonParam("ageTag"),
  };
};

export { usePartyFilterParams };
