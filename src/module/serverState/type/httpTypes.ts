import { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";

type ResponseTypeJjan<T> = {
  code: number;
  message: string;
  data: T;
};

type RequestConfigType = AxiosRequestConfig;
type ResponseType<T = unknown> = AxiosResponse<T> & ResponseTypeJjan<T>;
type ErrorType = AxiosError;

export type { RequestConfigType, ResponseType, ErrorType };
