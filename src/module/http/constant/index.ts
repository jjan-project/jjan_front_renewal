import { RequestSubConfigMap } from "../type";

const jjanURL = import.meta.env.VITE_EXAMPLE_JJAN_URL;
const kakaoURL = import.meta.env.VITE_EXAMPLE_KAKAO_URL;
const jjanToken = import.meta.env.VITE_EXAMPLE_JJAN_TOKEN;
const kakaoToken = import.meta.env.VITE_EXAMPLE_KAKAO_TOKEN;

const TEST_URL = "api.example.com";

export const requestHeaderMap: RequestSubConfigMap = {
  [jjanURL]: { Authorization: `Bearer ${jjanToken}` },
  [kakaoURL]: { Authorization: `KakaoAK ${kakaoToken}` },
  [TEST_URL]: (token: string) => ({ Authorization: `Bearer ${token}` }),
};
