import type { UseControllersProps } from "./types";

const useControllers = ({
  map,
  mapTypeControlEnabled,
  zoomControlEnabled,
}: UseControllersProps) => {
  if (mapTypeControlEnabled) {
    const mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
  }

  if (zoomControlEnabled) {
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  }

  return map;
};

export { useControllers };
