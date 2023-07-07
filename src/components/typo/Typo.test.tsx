import { render, screen } from "@testing-library/react";

import { Typo } from "./Typo";

import { colors } from "@/theme/foundation";

describe("Typo 컴포넌트", () => {
  it("'Test' 텍스트가 있는 Typo 컴포넌트를 렌더링해야 함", () => {
    render(<Typo appearance="body1">Test</Typo>);
    expect(screen.getByText(/Test/i)).toBeInTheDocument();
  });

  it("Typo 컴포넌트의 색상이 color 속성에 맞는 값을 가져야 함", () => {
    render(
      <Typo appearance="body1" color="orange300">
        Test
      </Typo>,
    );
    expect(screen.getByText(/Test/i)).toHaveStyle(`color: ${colors.orange300}`);
  });

  it("Typo 컴포넌트가 h1 태그로 렌더링 될 수 있어야 함", () => {
    render(
      <Typo as="h1" appearance="body1">
        Test
      </Typo>,
    );
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});
