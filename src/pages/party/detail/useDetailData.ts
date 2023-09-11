import { useQueryClient } from "@tanstack/react-query";

import {
  fetchJoinedParty,
  useFetchDetailParty,
} from "@/api/jjan/partyController";
import { PartyInfo } from "@/api/jjan/types";
import { Response } from "@/api/types";
import { QUERY_KEY } from "@/constants/queryKeys";

const useDetailData = (partyId: string | undefined) => {
  const queryClient = useQueryClient();
  const { data: responseDetail } = useFetchDetailParty(partyId);
  const joinedPartyQueryData = queryClient.getQueryData<Response<PartyInfo[]>>([
    QUERY_KEY.joinPartyList,
  ]);
  const joinedPartyList = joinedPartyQueryData?.data;

  if (!joinedPartyQueryData) fetchJoinedParty();

  const isJoined = joinedPartyList?.some(party => party.id === Number(partyId));

  return { responseDetail, isJoined };
};

export { useDetailData };
