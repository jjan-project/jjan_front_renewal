import { render } from "@testing-library/react";

import { Stack } from "./Stack";

describe("Stack", () => {
  it("renders without crashing", () => {
    const { container } = render(<Stack space="space01" />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders correct alignment when align prop is given", () => {
    const { container } = render(<Stack align="center" />);
    expect(container.firstChild).toHaveStyle("align-items: center");
  });

  it("renders correct gap when space prop is given", () => {
    const { container } = render(<Stack space="space02" />);
    expect(container.firstChild).toHaveStyle("gap: 8px");
  });
});
