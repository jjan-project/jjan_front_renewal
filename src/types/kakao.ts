// DESC : SameName, Meta의 타입을 공식적으로 kakao와 오픈소스인 kakao.maps.d.ts가 명시하고 있지 않으므로 kakao local api의 doc을 참고하였음

/**
 * 동일한 이름에 대한 정보를 나타내는 타입입니다.
 * @typedef {Object} SameName
 * @property {string[]} region - 관련된 지역들의 배열
 * @property {string} keyword - 검색한 키워드
 * @property {string} selected_region - 선택된 지역
 */
type SameName = {
  region: string[];
  keyword: string;
  selected_region: string;
};

/**
 * 메타데이터를 나타내는 타입입니다.
 * @typedef {Object} Meta
 * @property {boolean} is_end - 검색 결과가 끝났는지 나타냅니다. 더 이상 결과가 없으면 true입니다.
 * @property {number} total_count - 검색된 전체 결과 수를 나타냅니다.
 * @property {number} pageable_count - 현재 페이지에서 볼 수 있는 결과 수를 나타냅니다.
 * @property {SameName} same_name - 동일한 이름에 대한 정보를 나타내는 객체입니다.
 */
type Meta = {
  is_end: boolean;
  total_count: number;
  pageable_count: number;
  same_name: SameName;
};

type Stringify<T> = Record<keyof T, string>;

type PlacesSearchOptions = kakao.maps.services.PlacesSearchOptions;

type PlacesSearchOptionsStringified = Partial<Stringify<PlacesSearchOptions>>;

type PlacesSearchResult = kakao.maps.services.PlacesSearchResult;

type PlacesSearchResultResponse = {
  documents: PlacesSearchResult;
  meta: Meta;
};

type Coord2AddressResult = {
  address: kakao.maps.services.Address;
  road_address: kakao.maps.services.RoadAaddress;
};

type Coord2AddressResultResponse = {
  documents: Coord2AddressResult[];
  meta: Meta;
};

export type {
  PlacesSearchOptions,
  PlacesSearchOptionsStringified,
  PlacesSearchResult,
  PlacesSearchResultResponse,
  Coord2AddressResultResponse,
};
