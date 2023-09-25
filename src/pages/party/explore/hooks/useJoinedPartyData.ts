import { fetchJoinedParty } from "@/api/jjan/partyController";
import { PartyInfo } from "@/api/jjan/types";

export const useJoinedPartyData = () => {
  const joinedPartyResponse = fetchJoinedParty();
  let joinedPartyList: PartyInfo[] | undefined;

  if (joinedPartyResponse?.data) {
    joinedPartyList = joinedPartyResponse.data.data;
  }

  return joinedPartyList;
};
