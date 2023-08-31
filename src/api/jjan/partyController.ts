import { useMutation } from "@tanstack/react-query";
import { partyRoutes } from "@/routes";

import { Response } from "../types";

import { JJAN_URL } from "./domain";
import {
  PartyInfo,
  CreatePartyResponseData,
  UpdatePartyResponseDate,
} from "./types";

import { httpService } from "@/module/http";
import { serverStateManager } from "@/module/serverState";
import { ErrorType } from "@/module/serverState/type/httpTypes";

export const useFetchAllParty = () =>
  serverStateManager.fetch<Response<PartyInfo[]>>({
    url: `${JJAN_URL}${partyRoutes.getAllParty}`,
  });

export const fetchMyParty = () =>
  httpService.get<Response<PartyInfo[]>>(
    `${JJAN_URL}${partyRoutes.getMyParty}`,
    {
      withCredentials: true,
    },
  );

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

export const useJoinParty = () =>
  useMutation<Response<null>, ErrorType, string>({
    mutationFn: data =>
      httpService.post(`${JJAN_URL}${partyRoutes.joinParty}`, data, {
        withCredentials: true,
      }),
    useErrorBoundary: true,
  });

export const useOutParty = () =>
  serverStateManager.delete<Response<null>>({
    url: `${JJAN_URL}${partyRoutes.outParty}`,
  });
