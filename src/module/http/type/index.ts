type HeaderConfig =
  | Record<string, string>
  | ((param: string) => Record<string, string>);
type RequestSubConfigMap = Record<string, HeaderConfig>;

type RequestConfig = {
  params?: object;
  headers?: object;
};
type HttpMethod = "get" | "post" | "delete" | "put" | "patch";

interface RequestToken {
  token?: {
    accessToken: string;
  };
}

export type { RequestConfig, RequestSubConfigMap, HttpMethod, RequestToken };
