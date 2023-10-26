type MarkerOptions = {
  image?: string;
  width?: number;
  height?: number;
} & Partial<Omit<kakao.maps.MarkerOptions, "image">>;

type CircleOptions = Partial<kakao.maps.CircleOptions>;

interface PolygonOptions {
  infoWindowEnabled?: boolean;
}

interface MapOptions {
  markerEnabled?: MarkerOptions;
  circleEnabled?: CircleOptions | boolean;
  polygonEnabled?: PolygonOptions | boolean;
  mapTypeControlEnabled?: boolean;
  zoomControlEnabled?: boolean;
}

interface UseCreateMapProps {
  latitude: number;
  longitude: number;
  mapLevel?: number;
  mapClickEnabled?: boolean;
  options?: MapOptions;
}

interface UseCreateMapReturn {
  mapComponent: () => React.ReactNode;
  map: kakao.maps.Map | null;
  resetMapToInitialPosition: () => void;
  currentLatitude: number;
  currentLongitude: number;
}

interface UseControllersProps {
  map: kakao.maps.Map;
  mapTypeControlEnabled: boolean;
  zoomControlEnabled: boolean;
}

interface UseMarkerProps {
  map: kakao.maps.Map;
  latitude: number;
  longitude: number;
  markerEnabled: MarkerOptions | undefined;
}

interface UseCircleProps {
  map: kakao.maps.Map;
  circleEnabled: CircleOptions | boolean | undefined;
  latitude: number;
  longitude: number;
}

interface UseNeighborhoodPolygon {
  map: kakao.maps.Map;
  longitude: number;
  latitude: number;
  polygonEnabled: PolygonOptions | boolean | undefined;
}

interface UseClickProps {
  map: kakao.maps.Map | null;
  latitude: number;
  longitude: number;
  marker: kakao.maps.Marker | null;
  circle: kakao.maps.Circle | null;
  markerEnabled: MarkerOptions | boolean | undefined;
  circleEnabled: CircleOptions | boolean | undefined;
  setCurrentLatitude: (lat: number) => void;
  setCurrentLongitude: (lng: number) => void;
}

export type {
  UseCreateMapProps,
  UseCreateMapReturn,
  UseControllersProps,
  UseMarkerProps,
  UseCircleProps,
  UseNeighborhoodPolygon,
  UseClickProps,
};
