/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  QueryFunctionContext,
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { api } from "../adapter";
import ServerStateManager from "../interface";
import type { ResponseType, ErrorType } from "../type/httpTypes";
import type {
  QueryKeyT,
  MutationProps,
  QueryProps,
  GetInfinitePagesInterface,
  InfinitePagesProps,
} from "../type/ReactQueryManager";

export class ReactQueryManager implements ServerStateManager {
  private url: string | null = null;

  private fetcher<T>({
    queryKey,
    pageParam,
  }: QueryFunctionContext<QueryKeyT>): Promise<T> {
    const [url, params] = queryKey;

    return api.get<T>(this.url ? this.url : url, {
      params: { ...params, page: pageParam },
    });
  }

  fetch<T>(props: QueryProps<T>) {
    const { url, params, config, customQueryKey } = props;

    this.url = url;

    return useQuery<T, Error, T, QueryKeyT>({
      queryKey: customQueryKey ? [customQueryKey, params] : [url!, params],
      queryFn: (context: QueryFunctionContext<QueryKeyT>) =>
        this.fetcher<T>(context),
      enabled: !!url,
      ...config,
    });
  }

  preFetch<T>(props: Omit<QueryProps<T>, "config">) {
    const { url, params, customQueryKey } = props;
    const queryClient = useQueryClient();

    return () => {
      if (!url) {
        return;
      }

      this.url = url;

      queryClient.prefetchQuery<T, Error, T, QueryKeyT>({
        queryKey: customQueryKey ? [customQueryKey, params] : [url!, params],
        queryFn: (context: QueryFunctionContext<QueryKeyT>) =>
          this.fetcher(context),
      });
    };
  }

  loadMore<T>(props: InfinitePagesProps<T>) {
    const { url, params, config, customQueryKey } = props;

    this.url = url;

    return useInfiniteQuery<
      GetInfinitePagesInterface<T>,
      ErrorType,
      GetInfinitePagesInterface<T>,
      QueryKeyT
    >({
      queryKey: customQueryKey ? [customQueryKey, params] : [url!, params],
      queryFn: (context: QueryFunctionContext<QueryKeyT>) => {
        context.pageParam = context.pageParam || 1;
        return this.fetcher(context);
      },
      getPreviousPageParam: firstPage => firstPage.previousId ?? false,
      getNextPageParam: lastPage => lastPage.nextId ?? false,
      ...config,
    });
  }

  private genericMutation<T, S = unknown>(props: MutationProps<T, S>) {
    const { func, url, params, updater, config } = props;
    const queryClient = useQueryClient();
    return useMutation<ResponseType<S>, ErrorType, T | S>({
      mutationFn: func,
      onMutate: async data => {
        await queryClient.cancelQueries([url!, params]);

        const previousData = queryClient.getQueryData([url!, params]);
        queryClient.setQueryData<T>([url!, params], oldData => {
          if (oldData === undefined) return data as T;
          return updater ? updater(oldData!, data as S) : (data as T);
        });

        return previousData;
      },
      onError: (_err, _, context) => {
        queryClient.setQueryData([url!, params], context);
      },
      onSettled: () => {
        queryClient.invalidateQueries([url!, params]);
      },
      ...config,
    });
  }

  post<T, S>(props: MutationProps<T, S>) {
    const { url, params } = props;

    return this.genericMutation<T, S>({
      func: data => api.post<T, S>(url, data, params),
      ...props,
    });
  }

  update<T, S>(props: MutationProps<T, S>) {
    const { url, params } = props;

    return this.genericMutation<T, S>({
      func: data => api.patch<T, S>(url, data, params),
      ...props,
    });
  }

  delete<T>(props: MutationProps<T>) {
    const { url, params } = props;

    return this.genericMutation<T>({
      func: () => api.delete<T>(url, params),
      ...props,
    });
  }
}
