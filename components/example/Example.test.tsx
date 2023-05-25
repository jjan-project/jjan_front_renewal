import { render } from "@testing-library/react";
import React from "react";
import { describe, it, expect } from "vitest";

import Example from "./Example";

describe("Example 컴포넌트", () => {
  it("'Example' 텍스트가 있는 div를 렌더링해야 함", () => {
    const { getByText } = render(<Example />);

    expect(getByText("Example")).toBeDefined();
  });
});
