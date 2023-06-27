type HeaderConfig =
  | Record<string, string>
  | ((param: RequestToken) => Record<string, string>);
type RequestSubConfigMap = Record<string, HeaderConfig>;

type RequestConfig = {
  params?: object;
  headers?: object;
  token?: RequestToken;
};
type HttpMethod = "get" | "post" | "delete" | "put" | "patch";

interface RequestToken {
  accessToken: string;
  refreshToken: string;
}

export type {
  RequestConfig,
  RequestSubConfigMap,
  HttpMethod,
  RequestToken,
  HeaderConfig,
};
