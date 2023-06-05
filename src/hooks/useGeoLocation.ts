import { useEffect, useState } from "react";

interface Coordinates {
  latitude: number;
  longitude: number;
}

export function useGeoLocation(): Coordinates {
  const [location, setLocation] = useState<Coordinates>({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        error => {
          console.error(error.message);
        },
      );
    } else {
      console.error("Geolocation이 해당 브라우저에서 지원되지 않습니다.");
    }
  }, []);

  return location;
}
