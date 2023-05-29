import React from "react";
import { render, act, fireEvent, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";

import { useSignUp } from "../useSignUp";
import { QUERY_KEY } from "@/constants/queryKeys";
import { testBaseURL } from "@/constants/testBaseURL";

let signUpData = {
  email: "user@example.com",
  password: "password123",
  nickname: "John",
  location: "Seoul",
  birthday: "",
  avatar: "",
  gender: "",
  capacity: "",
};

let queryClient: QueryClient;

const renderWithProviders = (children: React.ReactNode) => {
  queryClient = new QueryClient();

  return render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>{children}</MemoryRouter>
    </QueryClientProvider>,
  );
};

describe("useSignUp", () => {
  const TestComponent = () => {
    const signUpMutation = useSignUp(`${testBaseURL}/user/join`);
    const handleClick = () => {
      signUpMutation.mutate(signUpData);
    };

    return (
      <div>
        <button onClick={handleClick}>버튼</button>
      </div>
    );
  };

  test("회원가입 성공 시 onSuccess 함수가 호출되고 쿼리 데이터가 업데이트되는지 확인", async () => {
    const { getByText } = renderWithProviders(<TestComponent />);
    const button = getByText("버튼");

    fireEvent.click(button);

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 100));
    });

    await waitFor(() => {
      const { message } = queryClient.getQueryData([QUERY_KEY.user]) as {
        message: string;
      };

      expect(message).toEqual("OK");
    });
  });

  test("이메일이 빈 문자열일 때 'FORBIDDEN' 메시지가 반환되는지 확인", async () => {
    signUpData = {
      ...signUpData,
      email: "",
    };

    const { getByText } = renderWithProviders(<TestComponent />);
    const button = getByText("버튼");

    fireEvent.click(button);

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 100));
    });

    await waitFor(() => {
      const { message } = queryClient.getQueryData([QUERY_KEY.user]) as {
        message: string;
      };

      expect(message).toEqual("FORBIDDEN");
    });
  });
});
