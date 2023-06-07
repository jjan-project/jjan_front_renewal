import { useQuery, useQueryClient } from "@tanstack/react-query";

import { kakaoKeyWordURL } from "@/constants/kakaoURL";
import { QUERY_KEY } from "@/constants/queryKeys";
import { httpService } from "@/module/http";
import type { kakaoKeyWordRequest } from "@/types/kakaoMap.type";
import type { Coordinates } from "@/types/location.type";

const SEARCH_OPTIONS = {
  query: "동사무소",
  radius: 4000, // 반경 4키로
  size: 15, // 최대 15개 아이템
};

export function useFindNeighborhoods({ latitude, longitude }: Coordinates) {
  const queryClient = useQueryClient();

  const params = {
    x: longitude,
    y: latitude,
    ...SEARCH_OPTIONS,
  };

  return useQuery<kakaoKeyWordRequest>(
    [QUERY_KEY.kakaoNeighborhoods, latitude, longitude],
    () => httpService.get(kakaoKeyWordURL, { params }),
    {
      onSuccess: data => {
        const uniqueAddresses = new Set<string>();
        data.documents.forEach(item => {
          const addressName = item.address_name
            .split(" ")
            .slice(0, 3)
            .join(" ");
          uniqueAddresses.add(addressName);
        });

        const neighborhoods = Array.from(uniqueAddresses);

        queryClient.setQueryData(
          [QUERY_KEY.kakaoNeighborhoods, latitude, longitude],
          neighborhoods,
        );
      },
      onError: error => {
        console.error("동네 검색 중 오류가 발생했습니다.", error);
      },
    },
  );
}
