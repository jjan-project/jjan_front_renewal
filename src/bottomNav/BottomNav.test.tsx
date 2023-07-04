import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { beforeEach } from "vitest";

import { BottomNav } from "./BottomNav";

describe("BottomNav", () => {
  const items = [
    { label: "Home", url: "/" },
    { label: "Chat", url: "/chat" },
    { label: "Finder", url: "/finder" },
  ];

  beforeEach(() => {
    render(
      <BrowserRouter>
        <BottomNav items={items} />
      </BrowserRouter>,
    );
  });

  it("nav item들이 제대로 들어있는지 확인", () => {
    items.forEach(item => {
      const itemLabel = screen.getByText(item.label);
      expect(itemLabel).toBeInTheDocument();
    });
  });

  it("a태그에 href값이 제대로 들어있는지 확인", () => {
    items.forEach(item => {
      const itemLabel = screen.getByText(item.label);
      const parentAnchor = itemLabel.closest("a");

      expect(parentAnchor).toBeInTheDocument();
      expect(parentAnchor).toHaveAttribute("href", item.url);
    });
  });
});
