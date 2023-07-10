import { render, screen, renderHook } from "@testing-library/react";
import user from "@testing-library/user-event";
import { useState } from "react";
import { describe, expect, test, vi } from "vitest";

import { Select } from "./Select";
import { SelectOption } from "./types";

const options = [
  { label: "first", value: 1 },
  { label: "second", value: 2 },
  { label: "third", value: 3 },
  { label: "four", value: 4 },
  { label: "five", value: 5 },
];

const mockSetState = vi.fn();

vi.mock("react", () => ({
  useState: (initial: SelectOption<number>) => [initial, mockSetState],
}));

describe("Select component", () => {
  const mockOnChange = vi.fn();

  test("Should render Select component correctly", () => {
    render(
      <Select
        options={options}
        value={options[0]}
        onChange={value => mockOnChange(value)}
      />,
    );

    const selectElement = screen.getByText("second");
    expect(selectElement).toBeInTheDocument();
  });

  test("Should render Select component and ul element when onClick", () => {
    render(
      <Select
        options={options}
        value={options[0]}
        onChange={value => mockOnChange(value)}
        testId="select"
      />,
    );

    const selectElement = screen.getByTestId("select");
    user.click(selectElement);

    const ulElement = screen.getByRole("list");
    expect(ulElement).toBeInTheDocument();
  });

  test("Select value should change when an item in the list is clicked", async () => {
    const { result } = renderHook(useState<SelectOption<number>>, {
      initialProps: { label: "first", value: 1 },
    });

    render(
      <Select
        options={options}
        value={result.current[0]}
        onChange={value => result.current[1](value as SelectOption<number>)}
        testId="select"
      />,
    );

    const selectElement = screen.getByTestId("select");
    await user.click(selectElement);

    const listItem = screen.getByText("second");
    await user.click(listItem);

    expect(result.current[1]).toBeCalledWith({ label: "second", value: 2 });
  });

  test("List should close when clicking outside the list", async () => {
    render(
      <div>
        <Select
          options={options}
          value={options[0]}
          onChange={mockOnChange}
          testId="select"
        />
        <button>Outside Element</button>
      </div>,
    );

    const selectElement = screen.getByTestId("select");
    await user.click(selectElement);

    const outsideElement = screen.getByText("Outside Element");
    await user.click(outsideElement);

    expect(() => screen.getByRole("list")).toThrowError;
  });
});
