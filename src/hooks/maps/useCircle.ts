import type { UseCircleProps } from "./types";

const useCircle = ({
  map,
  circleEnabled,
  latitude,
  longitude,
}: UseCircleProps): kakao.maps.Circle | null => {
  if (typeof circleEnabled === "object") {
    const {
      radius,
      strokeWeight,
      strokeColor,
      strokeOpacity,
      fillColor,
      fillOpacity,
      zIndex,
      strokeStyle,
    } = circleEnabled;

    const circleOptions = {
      center: new kakao.maps.LatLng(latitude, longitude),
      radius: radius || 1000,
      strokeWeight: strokeWeight || 1,
      strokeColor: strokeColor || "#75B8FA",
      strokeOpacity: strokeOpacity || 1,
      fillColor: fillColor || "#CFE7FF",
      fillOpacity: fillOpacity || 0.7,
      zIndex,
      strokeStyle,
    };

    const createdCircle = new kakao.maps.Circle(circleOptions);
    createdCircle.setMap(map);
    return createdCircle;
  }

  return null;
};

export { useCircle };
