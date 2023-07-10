import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import useProgressBar from "./useProgressBar";

describe("useProgressBar", () => {
  test("should throw error if initialStep is negative", () => {
    expect(() => {
      renderHook(() => useProgressBar(-1, 10));
    }).toThrow("Initial step cannot be negative.");
  });

  test("should throw error if maxStep is negative", () => {
    expect(() => {
      renderHook(() => useProgressBar(1, -10));
    }).toThrow("Max step cannot be negative.");
  });

  test("should throw error if maxStep is less than initialStep", () => {
    expect(() => {
      renderHook(() => useProgressBar(10, 5));
    }).toThrow("Max step cannot be less than initial step.");
  });

  test("should increase the step when setGaugeUp is called", () => {
    const { result } = renderHook(() => useProgressBar(1, 10));
    act(() => {
      result.current.setGaugeUp();
    });
    expect(result.current.step).toBe(2);
  });

  test("should decrease the step when setGaugeDown is called", () => {
    const { result } = renderHook(() => useProgressBar(2, 10));
    act(() => {
      result.current.setGaugeDown();
    });
    expect(result.current.step).toBe(1);
  });
});
