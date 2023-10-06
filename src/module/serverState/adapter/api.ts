import type { ResponseType, RequestConfigType } from "../type/httpTypes";

import HttpHandler from "@/module/http/interface/HttpHandler";

class ApiService {
  private httpService: HttpHandler;

  constructor(httpService: HttpHandler) {
    this.httpService = httpService;
  }

  get<T>(url: string, params?: RequestConfigType) {
    return this.httpService.get<T>(url, { ...params, withCredentials: true });
  }

  post<T, S>(url: string, data: T | S, params?: RequestConfigType) {
    return this.httpService.post<ResponseType<S>, T | S>(url, data, {
      ...params,
      withCredentials: true,
    });
  }

  patch<T, S>(url: string, data: T | S, params?: RequestConfigType) {
    return this.httpService.patch<ResponseType<S>, T | S>(url, data, {
      ...params,
      withCredentials: true,
    });
  }

  delete<T>(url: string, params?: RequestConfigType) {
    return this.httpService.delete<T>(url, {
      ...params,
      withCredentials: true,
    });
  }
}

export { ApiService };
