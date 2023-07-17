import {
  UseQueryOptions,
  UseMutationOptions,
  UseInfiniteQueryOptions,
} from "@tanstack/react-query";

import { ResponseType, RequestConfigType, ErrorType } from "./httpTypes";

type QueryKeyT = [string, object | undefined];

interface MutationProps<T, S = unknown> {
  func?: (data: T | S) => Promise<ResponseType<S>>;
  url: string;
  updater?: (oldData: T, newData: S) => T;
  params?: RequestConfigType;
  config?: UseMutationOptions<ResponseType<S>, ErrorType, T | S>;
}

interface QueryProps<T> {
  url: string | null;
  params?: RequestConfigType;
  config?: UseQueryOptions<T, Error, T, QueryKeyT>;
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

export type {
  QueryKeyT,
  MutationProps,
  QueryProps,
  GetInfinitePagesInterface,
  InfinitePagesProps,
};
