import { render, screen } from "@testing-library/react";

import { Skeleton } from "./Skeleton";

describe("<Skeleton />", () => {
  test("should render without crashing", () => {
    render(<Skeleton width="100px" height="100px" />);
    const skeleton = screen.getByTestId("skeleton-container");
    expect(skeleton).toBeInTheDocument();
  });

  test("should apply width and height from props", () => {
    render(<Skeleton width={200} height="50%" radius="10px" />);
    const skeleton = screen.getByTestId("skeleton-container");

    expect(skeleton).toHaveStyle("width: 200px");
    expect(skeleton).toHaveStyle("height: 50%");
    expect(skeleton).toHaveStyle("border-radius: 10px");
  });
});
