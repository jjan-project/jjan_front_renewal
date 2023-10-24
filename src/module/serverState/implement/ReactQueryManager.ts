/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  QueryFunctionContext,
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { ServerStateManager, ApiServiceInterface } from "../interface";
import type { ResponseType, ErrorType } from "../type/httpTypes";
import type {
  QueryKeyT,
  MutationProps,
  QueryProps,
  GetInfinitePagesInterface,
  InfinitePagesProps,
} from "../type/ReactQueryManager";

export class ReactQueryManager implements ServerStateManager {
  private apiService: ApiServiceInterface;

  constructor(apiService: ApiServiceInterface) {
    this.apiService = apiService;
  }

  private async minimumLoadingTime<T>(
    dataPromise: Promise<T>,
    minimumTime = 400,
  ): Promise<T> {
    const timerPromise = new Promise<void>(resolve =>
      setTimeout(resolve, minimumTime),
    );
    await Promise.all([dataPromise, timerPromise]);
    return dataPromise;
  }

  private fetcher<T>({
    queryKey,
    pageParam,
  }: QueryFunctionContext<QueryKeyT>): Promise<T> {
    const [url, params] = queryKey;
    return this.apiService.get<T>(url, {
      params: { ...params, page: pageParam },
    });
  }

  fetch<T>(props: QueryProps<T>) {
    const { url, params, config } = props;

    return useQuery<T, Error, T, QueryKeyT>({
      queryKey: [url!, params],
      queryFn: (context: QueryFunctionContext<QueryKeyT>) => {
        const dataPromise = this.fetcher<T>(context);
        return this.minimumLoadingTime(dataPromise);
      },
      enabled: !!url,
      ...config,
    });
  }

  preFetch<T>(props: Omit<QueryProps<T>, "config">) {
    const { url, params } = props;
    const queryClient = useQueryClient();

    return () => {
      if (!url) {
        return;
      }

      queryClient.prefetchQuery<T, Error, T, QueryKeyT>({
        queryKey: [url!, params],
        queryFn: (context: QueryFunctionContext<QueryKeyT>) =>
          this.fetcher(context),
      });
    };
  }

  loadMore<T>(props: InfinitePagesProps<T>) {
    const { url, params, config } = props;

    return useInfiniteQuery<
      GetInfinitePagesInterface<T>,
      ErrorType,
      GetInfinitePagesInterface<T>,
      QueryKeyT
    >({
      queryKey: [url!, params],
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
      func: data => this.apiService.post<T, S>(url, data, params),
      ...props,
    });
  }

  update<T, S>(props: MutationProps<T, S>) {
    const { url, params } = props;

    return this.genericMutation<T, S>({
      func: data => this.apiService.patch<T, S>(url, data, params),
      ...props,
    });
  }

  delete<T>(props: MutationProps<T>) {
    const { url, params } = props;

    return this.genericMutation<T>({
      func: () => this.apiService.delete<T>(url, params),
      ...props,
    });
  }
}
