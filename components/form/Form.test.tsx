import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import { describe, test, vitest } from "vitest";

import { Form } from "./Form";

describe("Form 컴포넌트", () => {
  test("Form 컴포넌트를 올바르게 렌더링해야 함", () => {
    const mockOnSubmit = vitest.fn();

    render(
      <Form onSubmit={mockOnSubmit} testid="form">
        <Form.Input type="text" name="test" />
      </Form>,
    );
    const formElement = screen.getByTestId("form");
    expect(formElement).to.be.ok;
    const inputElement = screen.getAllByLabelText("test");
    expect(inputElement).to.be.ok;
  });

  test("올바르지 않은 입력이 있을 때 onSubmit 함수가 호출되지 않아야 함", () => {
    const mockOnSubmit = vitest.fn((email, password) => {
      return Promise.resolve({ email, password });
    });

    render(
      <Form onSubmit={mockOnSubmit}>
        <Form.Input type="email" name="email" />
        <Form.Input type="password" name="password" />
        <button type="submit">click me</button>
      </Form>,
    );

    fireEvent.input(screen.getByLabelText("email"), {
      target: {
        value: "test",
      },
    });

    fireEvent.input(screen.getByLabelText("password"), {
      target: {
        value: "password",
      },
    });

    fireEvent.submit(screen.getByRole("button"));

    expect(mockOnSubmit).not.toBeCalled();
    expect((screen.getByLabelText("email") as HTMLInputElement).value).toBe(
      "test",
    );
    expect((screen.getByLabelText("password") as HTMLInputElement).value).toBe(
      "password",
    );
  });
});
