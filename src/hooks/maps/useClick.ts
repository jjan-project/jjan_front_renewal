import type { UseClickProps } from "./types";

const useClick = ({
  map,
  latitude,
  longitude,
  marker,
  circle,
  markerEnabled,
  circleEnabled,
  setCurrentLatitude,
  setCurrentLongitude,
}: UseClickProps): {
  resetMapToInitialPosition: () => void;
  handleMapClick: (mouseEvent: kakao.maps.event.MouseEvent) => void;
} => {
  // 마커와 서클 초기 위치로 리셋
  const resetMapToInitialPosition = () => {
    if (!map) return;
    if (!latitude || !longitude) return;

    const initialPosition = new kakao.maps.LatLng(latitude, longitude);

    if (markerEnabled && marker) {
      marker.setPosition(initialPosition);
    }
    if (circleEnabled && circle) {
      circle.setPosition(initialPosition);
    }

    setCurrentLatitude(latitude);
    setCurrentLongitude(longitude);

    map.panTo(initialPosition);
  };

  // 다른 장소를 클릭시 마커와 서클이 따라감
  const handleMapClick = (mouseEvent: kakao.maps.event.MouseEvent) => {
    const clickedPosition = mouseEvent.latLng;

    if (markerEnabled && marker) {
      marker.setPosition(clickedPosition);
    }

    if (circleEnabled && circle) {
      circle.setPosition(clickedPosition);
    }

    setCurrentLatitude(clickedPosition.getLat());
    setCurrentLongitude(clickedPosition.getLng());
  };

  return { resetMapToInitialPosition, handleMapClick };
};

export { useClick };
