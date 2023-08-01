import { render, fireEvent } from "@testing-library/react";
import { vi } from "vitest";

import { ErrorComponent } from "./ErrorComponent";

describe("ErrorComponent", () => {
  const mockResetError = vi.fn();
  const mockFunc = vi.fn();

  const props = {
    resetError: mockResetError,
    error: {
      message: "Test Error Message",
      detailMessage: "Test Error Detail Message",
      fixText: "Fix Text",
      func: mockFunc,
    },
    errorImg: "test_image.png",
  };

  it("renders without crashing", () => {
    const { getByText } = render(<ErrorComponent {...props} />);
    expect(getByText("Test Error Message")).toBeInTheDocument();
    expect(getByText("Test Error Detail Message")).toBeInTheDocument();
    expect(getByText("Fix Text")).toBeInTheDocument();
  });

  it("calls func when button is clicked", () => {
    const { getByText } = render(<ErrorComponent {...props} />);
    fireEvent.click(getByText("Fix Text"));
    expect(mockFunc).toHaveBeenCalled();
  });

  it("calls resetError when func is not provided and button is clicked", () => {
    const propsWithoutFunc = {
      ...props,
      error: { ...props.error, func: undefined },
    };
    const { getByText } = render(<ErrorComponent {...propsWithoutFunc} />);
    fireEvent.click(getByText("Fix Text"));
    expect(mockResetError).toHaveBeenCalled();
  });
});
