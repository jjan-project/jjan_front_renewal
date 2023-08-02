import { useCreateMap } from "@/hooks/maps";
import { useGeoLocation } from "@/hooks/useGeoLocation";

const TestComponentUseCreateMap = () => {
  const {
    geoLocation: { latitude, longitude },
  } = useGeoLocation();

  const {
    mapComponent,
    resetMapToInitialPosition,
    currentLatitude,
    currentLongitude,
  } = useCreateMap({
    latitude,
    longitude,
    mapLevel: 7,
    mapClickEnabled: true,
    options: {
      markerEnabled: {
        image: "/vite.svg",
      },
      polygonEnabled: { infoWindowEnabled: true },
      mapTypeControlEnabled: true,
      zoomControlEnabled: true,
      circleEnabled: { radius: 2000 },
    },
  });

  return (
    <div>
      <div style={{ width: "100%", height: "300px" }}>{mapComponent()}</div>
      <button onClick={resetMapToInitialPosition}>위치 초기화</button>
      <p>위도 : {currentLatitude}</p>
      <p>경도 : {currentLongitude}</p>
    </div>
  );
};

export default TestComponentUseCreateMap;
