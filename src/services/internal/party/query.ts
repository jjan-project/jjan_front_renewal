import { useMutation } from "@tanstack/react-query";

import { partyRoutes } from "@/router";

import { JJAN_URL } from "../domain";
import { Response } from "../types";
import {
  PartyInfo,
  CreatePartyResponseData,
  UpdatePartyResponseDate,
  PartyDetailInfo,
  FilterPartyRequestData,
} from "../types";

import { httpService } from "@/module/http";
import { serverStateManager } from "@/module/serverState";
import { ErrorType } from "@/module/serverState/type/httpTypes";
import { pathToUrl } from "@/utils/route";

export const useFetchAllParty = () =>
  serverStateManager.fetch<Response<PartyInfo[]>>({
    url: `${JJAN_URL}${partyRoutes.getAllParty}`,
    config: { suspense: false },
  });

export const useFetchJoinedParty = () =>
  serverStateManager.fetch<Response<PartyInfo[]>>({
    url: `${JJAN_URL}${partyRoutes.getMyParty}`,
    config: { suspense: false },
  });

export const useFetchDetailParty = (partyId: string | undefined) =>
  serverStateManager.fetch<Response<PartyDetailInfo>>({
    url: `${JJAN_URL}${pathToUrl(partyRoutes.getParty, { partyId })}`,
  });

export const useCreateParty = () =>
  serverStateManager.post<FormData, Response<CreatePartyResponseData>>({
    url: `${JJAN_URL}${partyRoutes.createParty}`,
    config: { useErrorBoundary: true },
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

export const useFetchFilterParty = () =>
  serverStateManager.post<FilterPartyRequestData, PartyInfo[]>({
    url: `${JJAN_URL}${partyRoutes.getFilterParty}`,
    params: { withCredentials: true },
  });
