import { useEffect, useState } from "react";

import type { Coordinates } from "@/types/location";

interface Error {
  isError: boolean;
  errorMessage: string;
}

interface GeoLocationReturn {
  geoLocation: Coordinates;
  isLoadingGeoLocation: boolean;
  errorGeoLocation: Error;
}

export function useGeoLocation(): GeoLocationReturn {
  const [geoLocation, setGeoLocation] = useState<Coordinates>({
    latitude: 0,
    longitude: 0,
  });

  const [isLoadingGeoLocation, setIsLoadingGeoLocation] =
    useState<boolean>(true);

  const [errorGeoLocation, setErrorGeoLocation] = useState<Error>({
    isError: false,
    errorMessage: "",
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setGeoLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setIsLoadingGeoLocation(false);
        },
        error => {
          setErrorGeoLocation({
            isError: true,
            errorMessage: error.message,
          });
          setIsLoadingGeoLocation(false);
        },
      );
    } else {
      setErrorGeoLocation({
        isError: true,
        errorMessage: "Geolocation이 해당 브라우저에서 지원되지 않습니다.",
      });
      setIsLoadingGeoLocation(false);
    }
  }, []);

  return { geoLocation, isLoadingGeoLocation, errorGeoLocation };
}
