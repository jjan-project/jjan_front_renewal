import { useEffect, useState } from "react";

import type { Coordinates } from "@/types/kakaoMap.type";

const SEARCH_KEYWORD = "동사무소"; // 동 단위로 주변 탐색
const SEARCH_OPTIONS = {
  radiu: 4000, // 반경 4키로
  size: 15, // 최대 15개 아이템
};

export function useFindNeighborhoods({ latitude, longitude }: Coordinates) {
  const [neighborhoods, setNeighborhoods] = useState<string[]>([]);

  useEffect(() => {
    if (latitude !== 0 && longitude !== 0) {
      findNeighborhoods({ longitude, latitude });
    }
  }, [latitude, longitude]);

  const findNeighborhoods = ({ latitude, longitude }: Coordinates) => {
    const options = {
      x: longitude,
      y: latitude,
      ...SEARCH_OPTIONS,
    };

    const places = new window.kakao.maps.services.Places();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const callback = function (result: any[], status: string) {
      if (status === window.kakao.maps.services.Status.OK) {
        const locationList: string[] = [];

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        result.forEach((item: any) => {
          const addressName = item.address_name
            .split(" ")
            .slice(0, 3)
            .join(" ");
          if (!locationList.includes(addressName)) {
            locationList.push(addressName);
          }
        });

        setNeighborhoods(locationList);
      }
    };

    places.keywordSearch(SEARCH_KEYWORD, callback, options);
  };

  return neighborhoods;
}
