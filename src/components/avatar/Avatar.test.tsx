import { fireEvent, render, screen } from "@testing-library/react";
import { useRef } from "react";
import { describe, test } from "vitest";

import { Avatar } from "./Avatar";

describe("Calendar 컴포넌트", () => {
  const altText = "Avatar Image";
  const imagePath = "./public/test1.png";
  const testId = "avatar-test";

  test("Avatar 컴포넌트가 정상적으로 렌더링되고 테스트 아이디가 적용되었는지 확인", () => {
    render(<Avatar alt={altText} src={imagePath} testId={testId} />);

    const avatarElement = screen.getByTestId(testId);

    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement).toHaveAttribute("alt", altText);
    expect(avatarElement).toHaveAttribute("src", imagePath);
  });

  test("Avatar 컴포넌트의 ref 조작이 되는지 확인", () => {
    const TestComponent = () => {
      const avatarRef = useRef<HTMLImageElement | null>(null);
      const handleClick = () => {
        if (avatarRef.current) {
          avatarRef.current.style.width = "100px";
          avatarRef.current.style.height = "100px";
        }
      };
      return (
        <Avatar
          alt={altText}
          src={imagePath}
          testId={testId}
          ref={avatarRef}
          onClick={handleClick}
        />
      );
    };

    render(<TestComponent />);
    const avatarElement = screen.getByTestId(testId);
    fireEvent.click(avatarElement);

    expect(avatarElement.style.width).toBe("100px");
  });
});
