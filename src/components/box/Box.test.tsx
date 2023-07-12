import { render } from "@testing-library/react";

import { Box } from "./Box";

describe("Box", () => {
  it("renders without crashing", () => {
    const { container } = render(<Box />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders correct overflow style", () => {
    const { container } = render(<Box overflow="scroll" />);
    expect(container.firstChild).toHaveStyle("overflow: scroll");
  });

  it("renders correct dimensions", () => {
    const { container } = render(<Box width="200px" height="100px" />);
    expect(container.firstChild).toHaveStyle("width: 200px; height: 100px");
  });

  it("renders correct padding", () => {
    const { container } = render(<Box padding="20px" />);
    expect(container.firstChild).toHaveStyle("padding: 20px");
  });

  it("centers content when centerContent is true", () => {
    const { container } = render(<Box centerContent />);
    expect(container.firstChild).toHaveStyle(
      "justify-content: center; align-items: center",
    );
  });

  it("renders children correctly", () => {
    const { getByText } = render(<Box>Test child</Box>);
    expect(getByText("Test child")).toBeInTheDocument();
  });

  it("renders with correct className", () => {
    const { container } = render(<Box className="test-class" />);
    expect(container.firstChild).toHaveClass("test-class");
  });
});
