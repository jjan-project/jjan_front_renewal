import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";

import { Fab } from "./Fab";

describe("<Fab />", () => {
  it("renders correctly with default props", () => {
    render(<Fab>X</Fab>);

    const fabButton = screen.getByRole("button");
    expect(fabButton).toBeInTheDocument();
    expect(fabButton).toHaveTextContent("X");
  });

  it("applies custom styles from props", () => {
    render(
      <Fab
        location="10 20 30 40"
        border="2px solid blue"
        boxShadow="0 4px 5px 1px rgba(0, 0, 0, 0.3)"
      >
        Y
      </Fab>,
    );

    const fabButton = screen.getByRole("button");
    expect(fabButton).toHaveStyle(`
      top: 10px;
      right: 20px;
      bottom: 30px;
      left: 40px;
      border: 2px solid blue;
      box-shadow: 0 4px 5px 1px rgba(0, 0, 0, 0.3);
      color: rgb(255, 255, 255);
      background-color: rgb(91, 31, 217);
    `);
  });

  it("fires onClick event", () => {
    const mockOnClick = vi.fn();
    render(<Fab onClick={mockOnClick}>Click Me</Fab>);

    const fabButton = screen.getByRole("button");
    fireEvent.click(fabButton);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
