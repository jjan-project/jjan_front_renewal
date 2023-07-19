/* eslint-disable @typescript-eslint/no-explicit-any */

interface ServerStateManager {
  fetch(props: Record<string, any>): void;
  preFetch(props: Record<string, any>): () => void;
  loadMore(props: Record<string, any>): void;
  post(props: Record<string, any>): void;
  update(props: Record<string, any>): void;
  delete(props: Record<string, any>): void;
}

export default ServerStateManager;
