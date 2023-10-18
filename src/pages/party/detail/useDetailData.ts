import {
  useFetchDetailParty,
  useFetchJoinedParty,
} from "@/services/internal/party/query";

const useDetailData = (partyId: string | undefined) => {
  const { data: responseDetail } = useFetchDetailParty(partyId);

  const { data: joinedPartyResponse } = useFetchJoinedParty();

  const isJoined = joinedPartyResponse?.data?.some(
    party => party.id === Number(partyId),
  );

  return { responseDetail, isJoined };
};

export { useDetailData };
