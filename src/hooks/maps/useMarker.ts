import type { UseMarkerProps } from "./types";

const useMarker = ({
  map,
  latitude,
  longitude,
  markerEnabled,
}: UseMarkerProps): kakao.maps.Marker | null => {
  if (markerEnabled) {
    const {
      height = 60,
      width = 55,
      image,
      title,
      draggable,
      clickable,
      zIndex,
      opacity,
      altitude,
      range,
    } = markerEnabled;

    const markerPosition = new kakao.maps.LatLng(latitude, longitude);

    const imageSize = new kakao.maps.Size(width, height);

    const imageOption = {
      offset: new kakao.maps.Point(width / 2, height),
      alt: "마커 이미지",
    };

    const markerImage = image
      ? new kakao.maps.MarkerImage(image, imageSize, imageOption)
      : undefined;

    const markerOptions: kakao.maps.MarkerOptions = {
      position: markerPosition,
      image: markerImage,
      title,
      draggable,
      clickable,
      zIndex,
      opacity,
      altitude,
      range,
    };

    const createdMarker = new kakao.maps.Marker(markerOptions);
    createdMarker.setMap(map);

    return createdMarker;
  }

  return null;
};

export { useMarker };
