import type { RequestSubConfigMap } from "../type";

const kakaoURL = import.meta.env.VITE_KAKAO_URL;
const kakaoToken = import.meta.env.VITE_KAKAO_TOKEN;

export const requestHeaderMap: RequestSubConfigMap = {
  [kakaoURL]: { Authorization: `KakaoAK ${kakaoToken}` },
};
