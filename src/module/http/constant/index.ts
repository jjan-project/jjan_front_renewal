import type { RequestSubConfigMap, RequestToken } from "../type";
import { extractDomain } from "../util";

const jjanURL = import.meta.env.VITE_EXAMPLE_JJAN_URL;
const kakaoURL = import.meta.env.VITE_EXAMPLE_KAKAO_URL;
const jjanToken = import.meta.env.VITE_EXAMPLE_JJAN_TOKEN;
const kakaoToken = import.meta.env.VITE_EXAMPLE_KAKAO_TOKEN;

const TEST_URL = "api.example.com";

export const requestHeaderMap: RequestSubConfigMap = {
  [jjanURL]: { Authorization: `Bearer ${jjanToken}` },
  [extractDomain(kakaoURL)]: { Authorization: `KakaoAK ${kakaoToken}` },
  // 💡 추후 Cookie값을 직접 조작하지 않는 방법으로 리팩토링 예정
  [TEST_URL]: (token: RequestToken) => ({
    Authorization: `Bearer ${token?.accessToken}`,
    Cookie: `refresh_token=${token?.refreshToken}`,
  }),
};
