import { render } from "@testing-library/react";

import { Spacing } from "./Spacing";

describe("Spacing", () => {
  it("renders without crashing", () => {
    const { container } = render(<Spacing size="10px" />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders correct width when direction is horizontal", () => {
    const { container } = render(
      <Spacing direction="horizontal" size="10px" />,
    );
    expect(container.firstChild).toHaveStyle("width: 10px");
  });

  it("renders correct height when direction is vertical", () => {
    const { container } = render(<Spacing direction="vertical" size="20px" />);
    expect(container.firstChild).toHaveStyle("height: 20px");
  });
});
