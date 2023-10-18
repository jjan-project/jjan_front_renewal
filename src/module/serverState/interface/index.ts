/* eslint-disable @typescript-eslint/no-explicit-any */

import { RequestConfigType, ResponseType } from "../type/httpTypes";

interface ServerStateManager {
  fetch(props: Record<string, any>): void;
  preFetch(props: Record<string, any>): () => void;
  loadMore(props: Record<string, any>): void;
  post(props: Record<string, any>): void;
  update(props: Record<string, any>): void;
  delete(props: Record<string, any>): void;
}

interface ApiServiceInterface {
  get<T>(url: string, params?: RequestConfigType): Promise<T>;
  post<T, S>(
    url: string,
    data: T | S,
    params?: RequestConfigType,
  ): Promise<ResponseType<T | S>>;
  patch<T, S>(
    url: string,
    data: T | S,
    params?: RequestConfigType,
  ): Promise<ResponseType<T | S>>;
  delete<T>(url: string, params?: RequestConfigType): Promise<T>;
}

export type { ServerStateManager, ApiServiceInterface };
