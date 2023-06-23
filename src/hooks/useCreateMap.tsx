/* eslint-disable @typescript-eslint/no-explicit-any */
import proj4 from "proj4";
import { useEffect, useState } from "react";

interface PropsType {
  latitude: number;
  longitude: number;
  mapLevel?: number;
  mapClickEnabled?: boolean;
  options?: {
    markerEnabled?: {
      markerImage?: string;
      markerWidth?: number;
      markerHeight?: number;
    };
    circleEnabled?: {
      radius?: number;
    };
    polygonEnabled?: {
      infoWindowEnabled?: boolean;
    };
    mapTypeControlEnabled?: boolean;
    zoomControlEnabled?: boolean;
  };
}

const useCreateMap = ({
  latitude,
  longitude,
  mapLevel,
  mapClickEnabled,
  options,
}: PropsType) => {
  const [map, setMap] = useState<any>(null);
  const [marker, setMarker] = useState<any>(null);
  const [circle, setCircle] = useState<any>(null);
  const [currentLatitude, setCurrentLatitude] = useState(latitude);
  const [currentLongitude, setCurrentLongitude] = useState(longitude);

  const mapComponent = () => {
    return <div id="myMap" style={{ width: "100%", height: "300px" }} />;
  };

  const {
    markerEnabled = {},
    circleEnabled = {},
    polygonEnabled = {},
    mapTypeControlEnabled = false,
    zoomControlEnabled = false,
  } = options ?? {};

  useEffect(() => {
    if (!latitude || !longitude) return;

    function createMap() {
      const container: any = document.getElementById("myMap");
      const mapOptions = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: mapLevel || 7,
      };

      const createdMap = new kakao.maps.Map(container, mapOptions);
      setMap(createdMap);
    }

    createMap();
  }, [latitude, longitude]);

  useEffect(() => {
    if (!map) return;

    const addMapControllers = () => {
      if (mapTypeControlEnabled) {
        const mapTypeControl = new kakao.maps.MapTypeControl();
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
      }

      if (zoomControlEnabled) {
        const zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
      }
    };

    const addMarker = () => {
      if (markerEnabled) {
        const markerPosition = new kakao.maps.LatLng(latitude, longitude);

        const imageSize = new kakao.maps.Size(55, 60);
        const imageOption = { offset: new kakao.maps.Point(22, 60) };
        const markerImage = markerEnabled.markerImage
          ? new kakao.maps.MarkerImage(
              markerEnabled.markerImage,
              imageSize,
              imageOption,
            )
          : undefined;

        const createdMarker = new kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
        });

        createdMarker.setMap(map);
        setMarker(createdMarker);
      }
    };

    const addCircle = () => {
      if (circleEnabled) {
        const circleOptions: any = {
          center: new kakao.maps.LatLng(latitude, longitude),
          radius: circleEnabled.radius || 1000,
          strokeWeight: 1,
          strokeColor: "#75B8FA",
          strokeOpacity: 1,
          fillColor: "#CFE7FF",
          fillOpacity: 0.7,
        };

        const createdCircle = new kakao.maps.Circle(circleOptions);
        createdCircle.setMap(map);
        setCircle(createdCircle);
      }
    };

    const findNeighborhood = () => {
      return new Promise<string>((resolve, reject) => {
        const geocoder = new window.kakao.maps.services.Geocoder();

        const callback = (result: any, status: any) => {
          if (status === window.kakao.maps.services.Status.OK) {
            resolve(result[0].region_3depth_name);
          } else {
            reject(status);
          }
        };

        geocoder.coord2RegionCode(longitude, latitude, callback);
      });
    };

    // 동 이름으로 해당 구역의 꼭짓점 위도,경도를 모두 가져옴
    const findNeighborhoodCoordinates = async (neighborhoodName: string) => {
      const response = await fetch("../../2302_행정구역[동].json");
      const data = await response.json();

      for (const feature of data.features) {
        if (neighborhoodName === feature.properties.EMD_KOR_NM) {
          return feature.geometry.coordinates;
        }
      }
      return false;
    };

    const addNeighborhoodPolygon = async () => {
      if (polygonEnabled) {
        try {
          const neighborhoodName = await findNeighborhood();
          const coordinates = await findNeighborhoodCoordinates(
            neighborhoodName,
          );

          if (!neighborhoodName) {
            throw new Error(
              `해당 좌표의 동을 찾을수가 없습니다.: ${latitude} ${longitude}`,
            );
          }

          if (!coordinates) {
            throw new Error(
              `해당 동에 대한 좌표를 찾을 수 없습니다.: ${neighborhoodName}`,
            );
          }

          const polygonPath: kakao.maps.LatLng[] = [];

          // UTM-K(GRS80)를 WGS84로 변환
          const utmk =
            "+proj=tmerc +lat_0=38 +lon_0=127.5 +k=0.9996 +x_0=1000000 +y_0=2000000 +ellps=GRS80 +units=m +no_defs";
          const wgs84 = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";
          const transformer = proj4(utmk, wgs84);

          coordinates.forEach((coordinateArray: any[]) => {
            coordinateArray.forEach(coordinate => {
              const [longi, lati] = transformer.forward(coordinate);
              polygonPath.push(new kakao.maps.LatLng(lati, longi));
            });
          });

          const polygon = new kakao.maps.Polygon({
            path: polygonPath,
            strokeColor: "#925CE9",
            fillColor: "#925CE9",
            fillOpacity: 0.7,
          });

          polygon.setMap(map);

          // 해당 폴리곤의 동 이름을 인포태그로 디스플레이
          if (polygonEnabled?.infoWindowEnabled) {
            let maxLat = polygonPath[0].getLat();
            let minLng = polygonPath[0].getLng();
            let maxLng = polygonPath[0].getLng();

            for (let i = 1; i < polygonPath.length; i++) {
              maxLat = Math.max(maxLat, polygonPath[i].getLat());
              minLng = Math.min(minLng, polygonPath[i].getLng());
              maxLng = Math.max(maxLng, polygonPath[i].getLng());
            }

            const centerLng = (minLng + maxLng) / 2;

            const infowindow = new kakao.maps.InfoWindow({
              position: new kakao.maps.LatLng(maxLat + 0.0001, centerLng),
              content: neighborhoodName,
            });

            infowindow.open(map);
          }
        } catch (error) {
          console.error(`동네를 그리는 동안 오류가 발생했습니다.: ${error}`);
        }
      }
    };

    addMapControllers();
    addMarker();
    addCircle();
    addNeighborhoodPolygon();
  }, [map]);

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
  const handleMapClick = (mouseEvent: any) => {
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

export default useCreateMap;
