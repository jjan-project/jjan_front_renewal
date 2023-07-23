import { kakaoRoutes } from "@/routes";

import { QUERY_KEY } from "@/constants/queryKeys";
import { serverStateManager } from "@/module/serverState";
import {
  PlacesSearchOptionsStringified,
  PlacesSearchResultResponse,
} from "@/types/kakao";

export const useGetNeighborhoods = (params: PlacesSearchOptionsStringified) =>
  serverStateManager.fetch<PlacesSearchResultResponse>({
    url: `${kakaoRoutes.searchKeyword}?${String(new URLSearchParams(params))}`,
    config: { enabled: !(params.x === "0" && params.y === "0") },
    customQueryKey: QUERY_KEY.kakaoNeighborhoods,
  });
