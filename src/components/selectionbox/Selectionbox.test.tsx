import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";

import { Selectionbox } from "./Selectionbox";

describe("Selectionbox component", () => {
  const options = ["Option 1", "Option 2", "Option 3"];

  test("renders selectionboxes with options", () => {
    render(<Selectionbox options={options} />);
    const selectionboxes = screen.getAllByRole("checkbox");

    expect(selectionboxes).toHaveLength(options.length);
  });

  test("renders selectionboxes with the correct labels", () => {
    render(<Selectionbox options={options} />);
    const labels = screen.getAllByRole("checkbox");

    expect(labels).toHaveLength(options.length);
    options.forEach((option, index) => {
      expect(labels[index]).toHaveTextContent(option);
    });
  });

  test("handles selectionbox change", async () => {
    const handleChange = vi.fn();
    render(<Selectionbox options={options} onChange={handleChange} />);
    const selectionboxes = screen.getAllByRole("checkbox");

    // Simulate clicking the checkboxes
    await user.click(selectionboxes[0]);
    await user.click(selectionboxes[2]);

    expect(handleChange).toHaveBeenCalledTimes(2);
    expect(handleChange).toHaveBeenCalledWith(["Option 1"]);
    expect(handleChange).toHaveBeenCalledWith(["Option 1", "Option 3"]);
  });
});
