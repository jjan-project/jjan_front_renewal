/**
 * 주어진 동네 이름에 대한 경계 좌표를 반환하는 함수입니다.
 *
 * @async
 * @param {string} neighborhoodName 동네 이름
 *
 * @returns {Promise<Array<number[][]>|false>} 해당 동네의 경계 좌표를 담은 이중 배열을 반환합니다.
 * 만약, 해당 동네를 찾지 못하면 false를 반환합니다.
 */
const findNeighborhoodVertices = async (
  neighborhoodName: string,
): Promise<Array<number[][]> | false> => {
  const response = await fetch("../../2302_행정구역[동].json");
  const data = await response.json();

  for (const feature of data.features) {
    if (neighborhoodName === feature.properties.EMD_KOR_NM) {
      return feature.geometry.coordinates;
    }
  }
  return false;
};

export { findNeighborhoodVertices };
