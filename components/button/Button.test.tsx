import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import React from "react";
import { describe, expect, vi } from "vitest";

import { Button } from "./Button";

describe("Button 컴포넌트", () => {
  test("'Click me' 텍스트가 있는 button을 렌더링해야 함", () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("버튼이 red 색상의 스타일 값을 가지고 있음", () => {
    render(<Button style={{ color: "red" }}>Click me</Button>);
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toHaveStyle("color: red");
  });

  test("버튼이 div 태그로 렌더링 될 수 있어야 함", () => {
    render(<Button as="div">Click me</Button>);
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement.tagName).toBe("DIV");
  });

  test("button 태그가 click event가 발생하지 않아야 함", async () => {
    const mockOnClick = vi.fn();
    render(<Button onClick={mockOnClick}>Test</Button>);
    await user.click(screen.getByText(/Test/i));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test("button 태그가 disabled 상태일 때 click event가 발생하지 않아야 함", async () => {
    const mockOnClick = vi.fn();
    render(
      <Button onClick={mockOnClick} disabled>
        Test
      </Button>,
    );
    await user.click(screen.getByText(/Test/i));
    expect(mockOnClick).toHaveBeenCalledTimes(0);
  });

  test("anchor 태그가 disabled 상태일 때 click event가 발생하지 않아야 함", async () => {
    const mockOnClick = vi.fn();
    render(
      <Button onClick={mockOnClick} as="a" disabled>
        Test
      </Button>,
    );
    await user.click(screen.getByText(/Test/i));
    expect(mockOnClick).toHaveBeenCalledTimes(0);
  });
});
