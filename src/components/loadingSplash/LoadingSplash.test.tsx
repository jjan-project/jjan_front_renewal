import { render, screen } from "@testing-library/react";

import { LoadingSplash } from "./LoadingSplash";

describe("LoadingSplash", () => {
  it("renders LoadingSplash component with an image", () => {
    const imageUrl = "image.jpg";
    render(<LoadingSplash imageUrl={imageUrl} />);

    const images = screen.getAllByRole("img", { name: /loading-splash/i });
    expect(images).toHaveLength(2);
    images.forEach(img => expect(img).toHaveAttribute("src", imageUrl));
  });
});
