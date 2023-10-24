import type { PlacesSearchResult } from "@/types/kakao";

export const extractAddress = (data: PlacesSearchResult): string[] => {
  const addresses = new Set<string>();

  data.forEach(item => {
    const address = item.address_name.split(" ").slice(0, 3).join(" ");
    addresses.add(address);
  });

  return [...addresses];
};
