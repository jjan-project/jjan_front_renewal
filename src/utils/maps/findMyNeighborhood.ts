interface Props {
  longitude: number;
  latitude: number;
}

/**
 * 주어진 경도와 위도를 이용하여 해당 위치의 지역명을 찾아 반환하는 함수입니다.
 *
 * @param {number} props.longitude 경도
 * @param {number} props.latitude 위도
 *
 * @returns {Promise<string>} 지역명을 담은 Promise 객체입니다.
 * 만약, 위치를 찾는데 실패하면 에러 상태를 반환합니다.
 */
const findMyNeighborhood = ({
  longitude,
  latitude,
}: Props): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const geocoder = new window.kakao.maps.services.Geocoder();

    const callback = (
      result: kakao.maps.services.RegionCode[],
      status: kakao.maps.services.Status,
    ) => {
      if (status === window.kakao.maps.services.Status.OK) {
        resolve(result[0].region_3depth_name);
      } else {
        reject(status);
      }
    };

    geocoder.coord2RegionCode(longitude, latitude, callback);
  });
};

export { findMyNeighborhood };
