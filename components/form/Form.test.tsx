import { zodResolver } from "@hookform/resolvers/zod";
import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import { describe, test, vi } from "vitest";
import { z } from "zod";

import { Form } from "./Form";

const errorMessages = {
  required: "필수 항목입니다.",
  email: "유효하지 않은 이메일입니다.",
  passwordMinLength: "비밀번호는 최소 8자 이상이어야 합니다.",
  passwordMaxLength: "비밀번호는 최대 16자 이하여야 합니다.",
  passwordPattern: "비밀번호는 영문자, 숫자, 대문자 조합이어야 합니다.",
};

const {
  required,
  email,
  passwordMinLength,
  passwordMaxLength,
  passwordPattern,
} = errorMessages;

const exampleLoginSchema = z.object({
  email: z.string().min(1, { message: required }).email({ message: email }),
  password: z
    .string()
    .min(8, { message: passwordMinLength })
    .max(16, { message: passwordMaxLength })
    .regex(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,16}$/, {
      message: passwordPattern,
    }),
});

const mockSubmit = vi.fn(data => {
  // eslint-disable-next-line no-console
  console.log(data);
});

describe("Form 컴포넌트", () => {
  test("Form 컴포넌트를 올바르게 렌더링해야 함", () => {
    render(
      <Form onSubmit={mockSubmit} testid="form">
        <Form.Input type="text" name="test" />
      </Form>,
    );

    const formElement = screen.getByTestId("form");
    expect(formElement).to.be.ok;

    const inputElement = screen.getAllByLabelText("test");
    expect(inputElement).to.be.ok;
  });

  test("올바르지 않은 입력에 대해 피드백 문구를 렌더링해야 함", async () => {
    render(
      <Form onSubmit={mockSubmit} resolver={zodResolver(exampleLoginSchema)}>
        <Form.Input type="email" name="email" />
        <Form.Input type="password" name="password" />
        <button type="submit">click me</button>
      </Form>,
    );

    fireEvent.click(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(2);

    expect(mockSubmit).not.toBeCalled();
  });

  test("입력이 올바를 경우 onSubmit 함수가 호출되어야 함", () => {
    render(
      <Form onSubmit={mockSubmit} resolver={zodResolver(exampleLoginSchema)}>
        <Form.Input type="email" name="email" />
        <Form.Input type="password" name="password" />
        <button type="submit">click me</button>
      </Form>,
    );

    fireEvent.input(screen.getByLabelText("email"), {
      target: {
        value: "example@test.com",
      },
    });

    fireEvent.input(screen.getByLabelText("password"), {
      target: {
        value: "Example1#",
      },
    });

    fireEvent.click(screen.getByRole("button"));

    expect(mockSubmit).not.toBeCalled();
  });

  test("올바르지 않은 입력이 있을 때 onSubmit 함수가 호출되지 않아야 함", async () => {
    render(
      <Form onSubmit={mockSubmit} resolver={zodResolver(exampleLoginSchema)}>
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

    fireEvent.click(screen.getByRole("button"));

    expect(mockSubmit).toBeCalled();
  });
});
