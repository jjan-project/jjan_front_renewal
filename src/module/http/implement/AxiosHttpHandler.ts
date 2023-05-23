import axios from "axios";
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  Method,
} from "axios";

import { requestHeaderMap } from "../constant";
import HttpHandler from "../interface/HttpHandler";
import type { RequestConfig } from "../type";
import { getRequestHeader } from "../util";
import { extractDomain } from "../util";

import { mergeObjects } from "@/utils/objects";

type AxiosRequestConfigAdaptor = Partial<AxiosRequestConfig> & RequestConfig;

class AxiosHttpHandler implements HttpHandler {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create();
    this.setupErrorInterceptor();
  }

  private setupErrorInterceptor() {
    this.instance.interceptors.response.use(
      response => response,
      error => {
        /**
         * @todo
         * Sophisticated error controls.
         */
        console.error("An error occurred:", error);

        error.customMessage = "example error";

        return Promise.reject(error);
      },
    );
  }

  private async request<T, D = object>(
    method: Method,
    url: string,
    data?: D,
    config?: AxiosRequestConfigAdaptor,
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.instance.request<T>({
      method,
      url,
      data,
      ...this.getRequestConfig(url, config),
    });

    return response.data;
  }

  async get<T>(url: string, config?: AxiosRequestConfigAdaptor) {
    return this.request<T>("get", url, undefined, config);
  }

  async post<T, D = object>(url: string, data: D, config?: AxiosRequestConfig) {
    return this.request<T, D>("post", url, data, config);
  }

  async delete<T>(url: string, config?: AxiosRequestConfig) {
    return this.request<T>("delete", url, undefined, config);
  }

  async put<T, D>(url: string, data: D, config?: AxiosRequestConfig) {
    return this.request<T, D>("put", url, data, config);
  }

  async patch<T, D>(url: string, data: D, config?: AxiosRequestConfig) {
    return this.request<T, D>("patch", url, data, config);
  }

  private getRequestConfig(
    url: string,
    config?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const defaultConfig: AxiosRequestConfig = {
      headers: getRequestHeader(requestHeaderMap, extractDomain(url)),
      /**
       * params: getRequestHeader(this.domain),
       * more...
       */
    };

    return mergeObjects(defaultConfig, config);
  }
}

export default AxiosHttpHandler;
