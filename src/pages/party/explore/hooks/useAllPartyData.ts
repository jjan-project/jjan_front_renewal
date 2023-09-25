import { useFetchAllParty } from "@/api/jjan/partyController";
import { PartyInfo } from "@/api/jjan/types";

export const useAllPartyData = () => {
  const allPartyResponse = useFetchAllParty();
  let defaultPartyList: PartyInfo[] | undefined;

  if (allPartyResponse?.data) {
    defaultPartyList = allPartyResponse.data.data;
  }

  return defaultPartyList;
};
