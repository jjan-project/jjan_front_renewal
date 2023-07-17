import { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";

type RequestConfigType = AxiosRequestConfig;
type ResponseType<T = unknown> = AxiosResponse<T>;
type ErrorType = AxiosError;

export type { RequestConfigType, ResponseType, ErrorType };
