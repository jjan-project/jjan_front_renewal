type RequestSubConfigMap = Record<string, Record<string, string>>;
type RequestConfig = {
  params?: object;
  headers?: object;
};
type HttpMethod = "get" | "post" | "delete" | "put" | "patch";

export type { RequestConfig, RequestSubConfigMap, HttpMethod };
