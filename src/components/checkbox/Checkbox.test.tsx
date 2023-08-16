import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";

import { Checkbox } from "./Checkbox";

describe("Checkbox component", () => {
  const options = ["Option 1", "Option 2", "Option 3"];

  test("renders checkboxes with options", () => {
    render(<Checkbox options={options} />);
    const checkboxes = screen.getAllByRole("checkbox");

    expect(checkboxes).toHaveLength(options.length);
  });

  test("renders checkboxes with the correct labels", () => {
    render(<Checkbox options={options} />);
    const labels = screen.getAllByRole("checkbox");

    expect(labels).toHaveLength(options.length);
    options.forEach((option, index) => {
      expect(labels[index]).toHaveTextContent(option);
    });
  });

  test("handles checkbox change", async () => {
    const handleChange = vi.fn();
    render(<Checkbox options={options} onChange={handleChange} />);
    const checkboxes = screen.getAllByRole("checkbox");

    // Simulate clicking the checkboxes
    await user.click(checkboxes[0]);
    await user.click(checkboxes[2]);

    expect(handleChange).toHaveBeenCalledTimes(2);
    expect(handleChange).toHaveBeenCalledWith(["Option 1"]);
    expect(handleChange).toHaveBeenCalledWith(["Option 1", "Option 3"]);
  });
});
