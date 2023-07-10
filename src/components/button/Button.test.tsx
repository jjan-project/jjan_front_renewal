import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect } from "vitest";

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
    expect(buttonElement).toHaveStyle("color: #ff0000");
  });

  test("버튼이 div 태그로 렌더링 될 수 있어야 함", () => {
    render(<Button as="div">Click me</Button>);
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement.tagName).toBe("DIV");
  });

  test("forwardRef의 기능이 올바르게 작동해야 함", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Click me</Button>);
    expect(ref.current).not.toBeNull();
  });
});
