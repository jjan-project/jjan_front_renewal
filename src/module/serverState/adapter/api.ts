import type { ResponseType, RequestConfigType } from "../type/httpTypes";

import HttpHandler from "@/module/http/interface/HttpHandler";

class ApiService {
  private httpService: HttpHandler;
  private config: RequestConfigType;

  constructor(httpService: HttpHandler, config: RequestConfigType = {}) {
    this.httpService = httpService;
    this.config = config;
  }

  private mergeConfig(params?: RequestConfigType) {
    return { ...params, ...this.config };
  }

  get<T>(url: string, params?: RequestConfigType) {
    return this.httpService.get<T>(url, this.mergeConfig(params));
  }

  post<T, S>(url: string, data: T | S, params?: RequestConfigType) {
    return this.httpService.post<ResponseType<S>, T | S>(
      url,
      data,
      this.mergeConfig(params),
    );
  }

  patch<T, S>(url: string, data: T | S, params?: RequestConfigType) {
    return this.httpService.patch<ResponseType<S>, T | S>(
      url,
      data,
      this.mergeConfig(params),
    );
  }

  delete<T>(url: string, params?: RequestConfigType) {
    return this.httpService.delete<T>(url, this.mergeConfig(params));
  }
}

export { ApiService };
