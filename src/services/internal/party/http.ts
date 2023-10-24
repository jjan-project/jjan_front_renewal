import { partyRoutes } from "@/router";

import { JJAN_URL } from "../domain";
import { Response } from "../types";

import { httpService } from "@/module/http";
import { pathToUrl } from "@/utils/route";

export const joinParty = (partyId: string | undefined) =>
  httpService.post<Response<null>>(
    `${JJAN_URL}${pathToUrl(partyRoutes.joinParty, { partyId })}`,
    undefined,
    { withCredentials: true },
  );

export const exitParty = (partyId: string | undefined) =>
  httpService.post<Response<null>>(
    `${JJAN_URL}${pathToUrl(partyRoutes.exitParty, { partyId })}`,
    undefined,
    { withCredentials: true },
  );
