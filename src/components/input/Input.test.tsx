import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";

import { Input } from "./Input";

describe("Input 컴포넌트", () => {
  test("Input을 렌더링해야 함", () => {
    render(
      <Input
        appearance="filled"
        type="text"
        name="text"
        data-testid="input1"
      />,
    );
    const inputElement = screen.getByTestId("input1");
    expect(inputElement).to.be.ok;
  });
});
