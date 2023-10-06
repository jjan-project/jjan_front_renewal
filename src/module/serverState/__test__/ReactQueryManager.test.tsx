import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { waitFor } from "@testing-library/dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, beforeEach } from "vitest";

import { serverStateManager } from "../";

import { fakeUsers } from "./dummyData";

import { testBaseURL } from "@/constants/testBaseURL";

interface ResponseInterface {
  id: string;
  name: string;
  email: string;
}

interface ResponsePostsInterface {
  id: string;
  title: string;
  body: string;
}

const DATA = {
  ID: fakeUsers[0].id,
  NAME: fakeUsers[0].name,
  EMAIL: fakeUsers[0].email,
};

const URL = `${testBaseURL}/users`;

const queryClient = new QueryClient();

const setupQueryClient = () => {
  queryClient.setQueryData([URL, undefined], fakeUsers);
};

describe("ReactQueryManager", () => {
  beforeEach(() => {
    setupQueryClient();
  });

  const renderComponent = (component: React.ReactNode) => {
    render(
      <QueryClientProvider client={queryClient}>
        {component}
      </QueryClientProvider>,
    );
  };

  test("fetch methods", async () => {
    const TestComponent = () => {
      const { data, isSuccess } = serverStateManager.fetch<ResponseInterface>({
        url: `${URL}/${DATA.ID}`,
        params: undefined,
        config: { retry: false },
      });

      if (isSuccess) {
        return <div data-testid="user-data">{data ? data.id : ""}</div>;
      }
    };

    renderComponent(<TestComponent />);

    await waitFor(() => screen.getByTestId("user-data"));

    expect(screen.getByTestId("user-data")).toHaveTextContent(DATA.ID);
  });

  test("prefetch methods", async () => {
    const TestComponent = () => {
      serverStateManager.preFetch<ResponseInterface>({
        url: `${URL}/${DATA.ID}`,
      });
      return null;
    };

    renderComponent(<TestComponent />);

    await waitFor(() => {
      const { id, name } = queryClient.getQueryData([
        `${URL}/${DATA.ID}`,
        undefined,
      ]) as ResponseInterface;

      expect(id).toEqual(DATA.ID);
      expect(name).toEqual(DATA.NAME);
    });
  });

  test("delete methods with async mutation", async () => {
    const TestComponent = () => {
      const deleteMutation = serverStateManager.delete<ResponseInterface[]>({
        url: URL,
        updater: (oldData, id) => oldData.filter(item => item.id !== id),
        params: { data: { message: "params test" } },
        config: { retry: 1 },
      });

      const onDelete = async (id: string) => {
        try {
          await deleteMutation.mutateAsync(id);
          const dataArr = queryClient.getQueryData([
            URL,
            undefined,
          ]) as ResponseInterface[];

          expect(dataArr[0].id).toEqual(DATA.ID);
        } catch (e) {
          // 에러 처리 로직
        }
      };

      return (
        <button onClick={() => onDelete(DATA.ID)} data-testid="delete-button" />
      );
    };

    renderComponent(<TestComponent />);

    fireEvent.click(screen.getByTestId("delete-button"));
  });

  test("post methods with async mutation", async () => {
    const newData = {
      id: "3",
      name: "New User",
      email: "newuser@example.com",
    };

    const TestComponent = () => {
      const postMutation = serverStateManager.post<
        ResponseInterface[],
        ResponseInterface
      >({
        url: URL,
        updater: (oldData, newData) => [...oldData, newData],
      });

      const onPost = async (data: ResponseInterface) => {
        try {
          await postMutation.mutateAsync(data);

          const dataArr = queryClient.getQueryData([
            URL,
            undefined,
          ]) as ResponseInterface[];

          const lastData = dataArr[dataArr.length - 1];

          expect(lastData.id).toEqual(newData.id);
          expect(lastData.name).toEqual(newData.name);
          expect(lastData.email).toEqual(newData.email);
        } catch (e) {
          // 에러 처리 로직
        }
      };

      return (
        <button onClick={() => onPost(newData)} data-testid="post-button" />
      );
    };

    renderComponent(<TestComponent />);

    fireEvent.click(screen.getByTestId("post-button"));
  });

  test("update methods with async mutation", async () => {
    const updatedData = {
      id: "1",
      name: "Updated User",
      email: "updateduser@example.com",
    };

    const TestComponent = () => {
      const updateMutation = serverStateManager.update<
        ResponseInterface[],
        ResponseInterface
      >({
        url: URL,
        updater: (oldData, newData) =>
          oldData.map(item => (item.id === newData.id ? newData : item)),
      });

      const onUpdate = async (data: ResponseInterface) => {
        try {
          await updateMutation.mutateAsync(data);
          const dataArr = queryClient.getQueryData([
            URL,
            undefined,
          ]) as ResponseInterface[];

          const updatedUser = dataArr.find(user => user.id === updatedData.id);

          expect(updatedUser?.id).toEqual(updatedData.id);
          expect(updatedUser?.name).toEqual(updatedData.name);
          expect(updatedUser?.email).toEqual(updatedData.email);
        } catch (e) {
          // 에러 처리 로직
        }
      };

      return (
        <button
          onClick={() => onUpdate(updatedData)}
          data-testid="update-button"
        />
      );
    };

    renderComponent(<TestComponent />);

    fireEvent.click(screen.getByTestId("update-button"));
  });

  test("loadMore methods with infinite query", async () => {
    const TestComponent = () => {
      const {
        data: list,
        fetchNextPage,
        hasNextPage,
        isSuccess,
      } = serverStateManager.loadMore<ResponsePostsInterface[]>({
        url: "https://api.example.com/posts",
      });

      return (
        <div>
          {isSuccess &&
            list?.pages.map((page, index) => (
              <ul key={index}>
                {page.data.map(post => (
                  <li key={post.id}>{post.title}</li>
                ))}
              </ul>
            ))}
          {hasNextPage && (
            <button
              onClick={() => fetchNextPage()}
              data-testid="load-more-button"
            >
              Load More
            </button>
          )}
        </div>
      );
    };

    renderComponent(<TestComponent />);

    await waitFor(() => {
      expect(screen.getByText("Fake Post 1")).toBeInTheDocument();
      expect(screen.getByText("Fake Post 2")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId("load-more-button"));

    await waitFor(() => {
      expect(screen.getByText("Fake Post 1")).toBeInTheDocument();
      expect(screen.getByText("Fake Post 2")).toBeInTheDocument();
      expect(screen.getByText("Fake Post 13")).toBeInTheDocument();
    });
  });
});
