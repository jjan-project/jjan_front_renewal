import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { NavLink } from "./NavLink";

describe("NavLink Component", () => {
  it("renders provided children correctly", () => {
    render(<NavLink link="/some-link">Link Text</NavLink>, {
      wrapper: BrowserRouter,
    });
    const linkElement = screen.getByText("Link Text");
    expect(linkElement).toBeInTheDocument();
  });

  // it("handles interaction correctly", () => {
  //   const mockNavigate = vi.fn();
  //   vi.mock("react-router-dom", async () => {
  //     const actual = await vi.importActual("react-router-dom");
  //     return {
  //       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //       //@ts-ignore
  //       ...actual,
  //       Link: ({ link, children }: NavLinkProps) => (
  //         <a href={link} onClick={mockNavigate}>
  //           {children}
  //         </a>
  //       ),
  //     };
  //   });

  //   render(<NavLink link="/some-link">Link Text</NavLink>, {
  //     wrapper: BrowserRouter,
  //   });
  //   const linkElement = screen.getByText("Link Text");
  //   fireEvent.click(linkElement);

  //   expect(mockNavigate).toHaveBeenCalled();
  // });
});
