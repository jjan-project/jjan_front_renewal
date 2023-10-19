import { useEffect, useState } from "react";

import { useFetchFilterParty } from "@/services/internal/party/query";
import { FilterPartyRequestData, PartyInfo } from "@/services/internal/types";

export const usePartyFilterData = ({
  sort,
  partyTagList,
  radiusRange,
  personnelGoe,
  personnelLoe,
  ageTag,
}: FilterPartyRequestData) => {
  const fetchFilterParty = useFetchFilterParty();

  const [filteredPartyList, setFilteredPartyList] = useState<PartyInfo[]>();

  const isFilteredPage = !!(
    sort ||
    partyTagList ||
    radiusRange ||
    personnelGoe ||
    personnelLoe ||
    ageTag
  );

  useEffect(() => {
    if (sort) {
      const fetchData = async () => {
        try {
          const requestBody: FilterPartyRequestData = {
            sort,
          };
          if (partyTagList) requestBody.partyTagList = partyTagList;
          if (radiusRange) requestBody.radiusRange = radiusRange;
          if (personnelGoe) requestBody.personnelGoe = personnelGoe;
          if (personnelLoe) requestBody.personnelLoe = personnelLoe;
          if (ageTag) requestBody.ageTag = ageTag;

          const data = await fetchFilterParty.mutateAsync(requestBody);

          setFilteredPartyList(data.data);
        } catch (error) {
          console.error("Error fetching filter party data:", error);
        }
      };

      fetchData();
    }
  }, []);

  return { filteredPartyList, isFilteredPage, ...fetchFilterParty };
};
