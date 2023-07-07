import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import { Slider } from "./Slider";

describe("Slider component", () => {
  test("Should render Slider component correctly", () => {
    const mockSetState = vi.fn();

    render(
      <Slider
        min={0}
        max={1000}
        value={100}
        setValue={mockSetState}
        testId="slider"
      />,
    );

    const sliderElement = screen.getByTestId("slider");

    expect(sliderElement).toBeInTheDocument();
  });

  test("Should update slider value when moved", () => {
    const mockSetState = vi.fn();

    render(
      <Slider
        min={0}
        max={100}
        value={50}
        setValue={mockSetState}
        testId="slider"
      />,
    );

    const sliderElement = screen.getByTestId("slider");

    fireEvent.change(sliderElement, { target: { value: "7" } });

    expect(mockSetState).toHaveBeenCalledWith(7);
  });
});
