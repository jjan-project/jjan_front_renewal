import { render, screen } from "@testing-library/react";

import { LoadingSplash } from "./LoadingSplash";

describe("LoadingSplash", () => {
  it("renders LoadingSplash component with an image", () => {
    const imageUrl = "image.jpg";
    render(<LoadingSplash imageUrl={imageUrl} />);

    const textElement = screen.getByText(/잠시만 기다려주세요!/i);
    expect(textElement).toBeInTheDocument();

    const images = screen.getAllByRole("img", { name: /loading-splash/i });
    expect(images).toHaveLength(2);
    images.forEach(img => expect(img).toHaveAttribute("src", imageUrl));
  });
});
