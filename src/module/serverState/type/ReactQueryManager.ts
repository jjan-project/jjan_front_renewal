import {
  UseQueryOptions,
  UseMutationOptions,
  UseInfiniteQueryOptions,
} from "@tanstack/react-query";

import { ResponseType, RequestConfigType, ErrorType } from "./httpTypes";

type QueryKeyT = [string, object | undefined];

interface QueryProps<T> {
  url: string | null;
  params?: RequestConfigType;
  config?: UseQueryOptions<T, Error, T, QueryKeyT>;
  customQueryKey?: string;
}

interface GetInfinitePagesInterface<T> {
  nextId?: number;
  previousId?: number;
  data: T;
  count: number;
}

interface InfinitePagesProps<T> extends Omit<QueryProps<T>, "config"> {
  config?: UseInfiniteQueryOptions<
    GetInfinitePagesInterface<T>,
    ErrorType,
    GetInfinitePagesInterface<T>,
    GetInfinitePagesInterface<T>,
    QueryKeyT
  >;
}

interface MutationProps<T, S = unknown> {
  func?: ((data: T | S) => Promise<ResponseType<T | S>>) | (() => Promise<T>);
  url: string;
  updater?: (oldData: T, newData: S) => T;
  params?: RequestConfigType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  config?: UseMutationOptions<ResponseType<S> | any, ErrorType, T | S>;
}

export type {
  QueryKeyT,
  MutationProps,
  QueryProps,
  GetInfinitePagesInterface,
  InfinitePagesProps,
};
