import { useEffect, useState, ReactNode } from "react";

import { UseCreateMapProps, UseCreateMapReturn } from "./types";
import { useCircle } from "./useCircle";
import { useClick } from "./useClick";
import { useControllers } from "./useControllers";
import { useMarker } from "./useMarker";
import { useNeighborhoodPolygon } from "./useNeighborhoodPolygon";

/**
 * 지도 생성 및 관련 기능을 위한 hook입니다.
 *
 * @param {number} params.latitude - 지도의 초기 위도 값
 * @param {number} params.longitude - 지도의 초기 경도 값
 * @param {number} params.mapLevel - 지도의 초기 줌 레벨. 없으면 7로 설정됩니다.
 * @param {boolean} params.mapClickEnabled - 지도 클릭 이벤트 활성화 여부
 * @param {MapOptions} params.options - 지도 및 추가 기능에 대한 옵션
 * @returns {UseCreateMapReturn} - 생성된 지도와 관련 정보들
 */
const useCreateMap = ({
  latitude,
  longitude,
  mapLevel,
  mapClickEnabled,
  options,
}: UseCreateMapProps): UseCreateMapReturn => {
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const [marker, setMarker] = useState<kakao.maps.Marker | null>(null);
  const [circle, setCircle] = useState<kakao.maps.Circle | null>(null);
  const [currentLatitude, setCurrentLatitude] = useState(latitude);
  const [currentLongitude, setCurrentLongitude] = useState(longitude);

  const mapComponent = (): ReactNode => {
    return <div id="myMap" style={{ width: "100%", height: "100%" }} />;
  };

  const {
    markerEnabled,
    circleEnabled,
    polygonEnabled,
    mapTypeControlEnabled = false,
    zoomControlEnabled = false,
  } = options ?? {};

  useEffect(() => {
    if (!latitude || !longitude) return;

    const createMap = () => {
      const container: HTMLElement | null = document.getElementById("myMap");
      const mapOptions = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: mapLevel || 7,
      };

      if (container) {
        const createdMap = new kakao.maps.Map(container, mapOptions);
        setMap(createdMap);
      }
    };

    createMap();
  }, [latitude, longitude]);

  useEffect(() => {
    if (!map) return;

    setMap(useControllers({ map, mapTypeControlEnabled, zoomControlEnabled }));

    setMarker(useMarker({ map, latitude, longitude, markerEnabled }));

    setCircle(useCircle({ map, circleEnabled, latitude, longitude }));

    useNeighborhoodPolygon({
      map,
      longitude,
      latitude,
      polygonEnabled,
    });
  }, [map]);

  const { handleMapClick, resetMapToInitialPosition } = useClick({
    map,
    latitude,
    longitude,
    marker,
    circle,
    markerEnabled,
    circleEnabled,
    setCurrentLatitude,
    setCurrentLongitude,
  });

  useEffect(() => {
    if (map && marker && mapClickEnabled) {
      kakao.maps.event.addListener(map, "click", handleMapClick);
    }
  }, [map, marker, circle]);

  return {
    mapComponent,
    map,
    resetMapToInitialPosition,
    currentLatitude,
    currentLongitude,
  };
};

export { useCreateMap };
