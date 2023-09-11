import { kakaoRoutes } from "@/routes";

import { QUERY_KEY } from "@/constants/queryKeys";
import { serverStateManager } from "@/module/serverState";
import {
  Coord2AddressResultResponse,
  PlacesSearchOptionsStringified,
  PlacesSearchResultResponse,
} from "@/types/kakao";

export const useGetNeighborhoods = (params: PlacesSearchOptionsStringified) =>
  serverStateManager.fetch<PlacesSearchResultResponse>({
    url: `${kakaoRoutes.searchKeyword}?${String(new URLSearchParams(params))}`,
    config: {
      enabled: !(params.x === "0" && params.y === "0"),
      suspense: false,
    },
    customQueryKey: QUERY_KEY.kakaoNeighborhoods,
  });

type ExParam = {
  x: string;
  y: string;
  radius: string;
  query: string;
};

export const useGetLocation = (params: ExParam) =>
  serverStateManager.fetch<PlacesSearchResultResponse>({
    url: `${kakaoRoutes.searchKeyword}?x=${params.x}&y=${params.y}&radius=${params.radius}&query=${params.query}`,
    config: {
      enabled: !!params.query,
    },
    customQueryKey: `${QUERY_KEY.locations}${params.query}`,
  });

export const useGetAddressFromLatLng = (latitude: string, longitude: string) =>
  serverStateManager.fetch<Coord2AddressResultResponse>({
    url: `${kakaoRoutes.addressFromLatLng}?x=${longitude}&y=${latitude}&input_coord=WGS84`,
    config: {
      enabled: !(latitude === "" && longitude === ""),
    },
  });
