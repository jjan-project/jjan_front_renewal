import { render, act } from "@testing-library/react";
import React from "react";
import { describe, it, expect } from "vitest";

import {
  State,
  DispatchType,
  initialState,
  SignupProvider,
  useSignupState,
  useSignupDispatch,
  setEmail,
  setPassword,
} from "../signupStore";

describe("signupStore 테스트", () => {
  it("전역 state가 업데이트 되었을때", () => {
    let state: State = initialState;
    let dispatch: DispatchType;

    const TestComponent = () => {
      state = useSignupState();
      dispatch = useSignupDispatch();

      return null;
    };

    render(
      <SignupProvider>
        <TestComponent />
      </SignupProvider>,
    );

    act(() => {
      dispatch(setEmail("test@example.com"));
      dispatch(setPassword("password123"));
    });

    expect(state?.email).toEqual("test@example.com");
    expect(state?.password).toEqual("password123");
  });
});
