import { render } from "@testing-library/react";

import { Flex } from "./Flex";

describe("Flex", () => {
  it("renders without crashing", () => {
    const { container } = render(<Flex />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders correct alignItems style", () => {
    const { container } = render(<Flex alignItems="center" />);
    expect(container.firstChild).toHaveStyle("align-items: center");
  });

  // Similar tests for alignContent, justifyContent, justifyItems,
  // justifySelf, alignSelf, flexWrap, flexDirection.

  it("renders correct flexBasis style", () => {
    const { container } = render(<Flex flexBasis="100px" />);
    expect(container.firstChild).toHaveStyle("flex-basis: 100px");
  });

  // Similar tests for flexGrow, flexShrink, order.

  it("renders correct gap style", () => {
    const { container } = render(<Flex gap="20px" />);
    expect(container.firstChild).toHaveStyle("gap: 20px");
  });

  it("renders children correctly", () => {
    const { getByText } = render(<Flex>Test child</Flex>);
    expect(getByText("Test child")).toBeInTheDocument();
  });
});
