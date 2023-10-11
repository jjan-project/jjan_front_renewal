import { AxiosRequestConfig } from "axios";

type HeaderConfig = Record<string, string>;

type RequestSubConfigMap = Record<string, HeaderConfig>;

type RequestConfig = {
  params?: object;
  headers?: object;
} & Partial<AxiosRequestConfig>;

type HttpMethod = "get" | "post" | "delete" | "put" | "patch";

export type { RequestConfig, RequestSubConfigMap, HttpMethod, HeaderConfig };
