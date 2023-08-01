import {
  QueryClient,
  QueryClientProvider,
  useQueryErrorResetBoundary,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ErrorBoundary } from "react-error-boundary";

import { ErrorComponent } from "./components/error";

import errorImg from "@/assets/error.png";

interface Props {
  children: React.ReactNode;
}

const QueryErrorBoundary = ({ children }: Props) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({ resetErrorBoundary, error }) => (
        <ErrorComponent
          resetError={resetErrorBoundary}
          error={error}
          errorImg={errorImg}
        />
      )}
    >
      {children}
    </ErrorBoundary>
  );
};

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        useErrorBoundary: true, // (*) 여기서는 글로벌로 셋팅했지만 개별 쿼리로 셋팅가능
        suspense: true, // (*) 여기서는 글로벌로 셋팅했지만 개별 쿼리로 셋팅가능
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <QueryErrorBoundary>{children}</QueryErrorBoundary>
    </QueryClientProvider>
  );
};

export default QueryProvider;
