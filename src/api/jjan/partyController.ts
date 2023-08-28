import { partyRoutes } from "@/routes";

import { Response } from "../types";

import { JJAN_URL } from "./domain";
import { PartyInfo } from "./types";

import { httpService } from "@/module/http";
import { serverStateManager } from "@/module/serverState";

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
