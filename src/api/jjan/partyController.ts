import { useMutation, useQuery } from "@tanstack/react-query";

import { partyRoutes } from "@/routes";

import { Response } from "../types";

import { JJAN_URL } from "./domain";
import {
  PartyInfo,
  CreatePartyResponseData,
  UpdatePartyResponseDate,
  PartyDetailInfo,
} from "./types";

import { QUERY_KEY } from "@/constants/queryKeys";
import { httpService } from "@/module/http";
import { serverStateManager } from "@/module/serverState";
import { ErrorType } from "@/module/serverState/type/httpTypes";
import { pathToUrl } from "@/utils/pathToURL";

export const useFetchAllParty = () =>
  serverStateManager.fetch<Response<PartyInfo[]>>({
    url: `${JJAN_URL}${partyRoutes.getAllParty}`,
  });

export const fetchJoinedParty = () =>
  useQuery<Response<PartyInfo[]>, ErrorType, Response<PartyInfo[]>, string[]>({
    queryKey: [QUERY_KEY.joinPartyList],
    queryFn: async () =>
      await httpService.get(`${JJAN_URL}${partyRoutes.getMyParty}`, {
        withCredentials: true,
      }),
  });

export const useFetchDetailParty = (partyId: string | undefined) =>
  serverStateManager.fetch<Response<PartyDetailInfo>>({
    url: `${JJAN_URL}${pathToUrl(partyRoutes.getParty, { partyId })}`,
  });

export const useCreateParty = () =>
  useMutation<Response<CreatePartyResponseData>, ErrorType, FormData>({
    mutationFn: (formData: FormData) =>
      httpService.post(`${JJAN_URL}${partyRoutes.createParty}`, formData, {
        withCredentials: true,
      }),
    useErrorBoundary: true,
  });

export const useUpdateParty = () =>
  useMutation<Response<UpdatePartyResponseDate>, ErrorType, string>({
    mutationFn: data =>
      httpService.post(`${JJAN_URL}${partyRoutes.updateParty}`, data, {
        withCredentials: true,
      }),
    useErrorBoundary: true,
  });

export const useDeleteParty = () =>
  serverStateManager.delete<Response<null>>({
    url: `${JJAN_URL}${partyRoutes.deleteParty}`,
  });

export const joinParty = (partyId: string | undefined) =>
  httpService.post<Response<null>>(
    `${JJAN_URL}${pathToUrl(partyRoutes.joinParty, { partyId })}`,
    undefined,
    { withCredentials: true },
  );

export const outParty = (partyId: string | undefined) =>
  httpService.post<Response<null>>(
    `${JJAN_URL}${pathToUrl(partyRoutes.outParty, { partyId })}`,
    undefined,
    { withCredentials: true },
  );
