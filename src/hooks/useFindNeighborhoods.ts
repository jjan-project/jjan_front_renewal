import { useEffect, useState } from "react";

import { useGetNeighborhoods } from "@/services/external/kakao";
import type { PlacesSearchOptions } from "@/types/kakao";
import type { Coordinates } from "@/types/location";
import { extractAddress } from "@/utils/kakao";
import { convertObjectValuesToStrings } from "@/utils/object";

const defaultOptions = {
  query: "동사무소",
  radius: 3000, // 검색 반경 거리 1 = 1m
  size: 15, // 최대 아이템 갯수
  category_group_code: "PO3", // 공공기관
  sort: "distance", // 거리 순 정렬
};

type Props = Coordinates & {
  searchOptions?: PlacesSearchOptions;
};

export function useFindNeighborhoods({
  latitude,
  longitude,
  searchOptions,
}: Props) {
  const [addressList, setAddressList] = useState<string[]>([]);

  const shouldFetch = latitude !== 0 && longitude !== 0;

  const options = {
    x: longitude,
    y: latitude,
    ...defaultOptions,
    ...searchOptions,
  };

  const stringOptions = convertObjectValuesToStrings(options);
  const neighborhoods = useGetNeighborhoods(stringOptions);

  useEffect(() => {
    if (!shouldFetch) return;

    neighborhoods.refetch();
  }, [latitude, longitude, shouldFetch]);

  useEffect(() => {
    if (!neighborhoods.data || !neighborhoods.data.documents) return;

    const addresses = extractAddress(neighborhoods.data.documents);
    setAddressList(addresses);
  }, [neighborhoods.data]);

  return { ...neighborhoods, data: addressList };
}
