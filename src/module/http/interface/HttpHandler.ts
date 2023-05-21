import type { RequestConfig } from "../type";

export default interface HttpHandler {
  get<T>(url: string, config?: RequestConfig): Promise<T>;
  put<T, D = object>(url: string, data?: D, config?: RequestConfig): Promise<T>;
  post<T, D = object>(
    url: string,
    data?: D,
    config?: RequestConfig,
  ): Promise<T>;
  delete<T>(url: string, config?: RequestConfig): Promise<T>;
  patch<T, D = object>(
    url: string,
    data?: D,
    config?: RequestConfig,
  ): Promise<T>;
}
