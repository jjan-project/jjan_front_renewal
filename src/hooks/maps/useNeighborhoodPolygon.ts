/* eslint-disable @typescript-eslint/no-explicit-any */
import proj4 from "proj4";

import type { UseNeighborhoodPolygon } from "./types";

import { findMyNeighborhood, findNeighborhoodVertices } from "@/utils/maps";

const useNeighborhoodPolygon = async ({
  map,
  longitude,
  latitude,
  polygonEnabled,
}: UseNeighborhoodPolygon) => {
  if (polygonEnabled) {
    try {
      const neighborhoodName = await findMyNeighborhood({
        longitude,
        latitude,
      });
      const coordinates = await findNeighborhoodVertices(neighborhoodName);

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
      if (typeof polygonEnabled === "object") {
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
      }
    } catch (error) {
      console.error(`동네를 그리는 동안 오류가 발생했습니다.: ${error}`);
    }
  }
};

export { useNeighborhoodPolygon };
