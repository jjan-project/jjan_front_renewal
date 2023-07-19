// List.test.tsx
import { render, screen } from "@testing-library/react";

import { List } from "./List";

// Mock Data for children
const mockData = ["Item1", "Item2", "Item3"];

describe("List Component", () => {
  it("renders with default props", () => {
    render(
      <List>
        {mockData.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </List>,
    );

    const list = screen.getByRole("list");
    expect(list).toHaveStyle({
      height: "100%",
      overflow: "auto",
      flexDirection: "column",
    });
  });

  it("renders with custom props", () => {
    render(
      <List height="500px" overflow="scroll" gap="10px" direction="row">
        {mockData.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </List>,
    );

    const list = screen.getByRole("list");
    expect(list).toHaveStyle({
      height: "500px",
      overflow: "scroll",
      gap: "10px",
      flexDirection: "row",
    });
  });

  it("renders correct number of children", () => {
    render(
      <List>
        {mockData.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </List>,
    );

    mockData.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});
