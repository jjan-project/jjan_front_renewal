import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, act, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";

import { useSignUp } from "../useSignUp";

import { QUERY_KEY } from "@/constants/queryKeys";

describe("useSignUp", () => {
  test("회원가입 성공 시 onSuccess 함수가 호출되고 쿼리 데이터가 업데이트되는지 확인", async () => {
    const signUpData = {
      email: "user@example.com",
      password: "password123",
      nickname: "John",
      location: "Seoul",
      birthday: "",
      avatar: "",
      gender: "",
      capacity: "",
    };

    const queryClient = new QueryClient();
    const TestComponent = () => {
      const signUpMutation = useSignUp("https://api.example.com");
      const handleClick = () => {
        signUpMutation.mutate(signUpData);
      };

      return (
        <div>
          <button onClick={handleClick}>버튼</button>
        </div>
      );
    };

    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <TestComponent />
        </MemoryRouter>
      </QueryClientProvider>,
    );

    const button = getByText("버튼");
    fireEvent.click(button);

    await act(async () => {
      // onSuccess 콜백의 비동기 동작이 완료될 때까지 대기
      // setTimeout을 사용하지 않는 방법을 찾지못함
      await new Promise(resolve => setTimeout(resolve, 100));
    });

    await waitFor(() => {
      const { message } = queryClient.getQueryData([QUERY_KEY.user]) as {
        message: string;
      };

      expect(message).toEqual("OK");
    });
  });
});
