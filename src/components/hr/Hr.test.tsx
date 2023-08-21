import { render } from "@testing-library/react";

import { Hr } from "./Hr";

describe("<Hr />", () => {
  test("solid 타입이면, 전체 너비의 Hr을 렌더링해야 한다.", () => {
    const { container } = render(<Hr type="solid" backgroundColor="gray700" />);
    const hrElement = container.firstChild;

    expect(hrElement).toHaveStyle({
      width: "100%",
      height: "1px",
      backgroundColor: "gray700",
    });
  });

  test("dotted 타입이면, 점선의 Hr을 렌더링해야 한다.", () => {
    const { container } = render(
      <Hr type="dotted" backgroundColor="gray700" />,
    );
    const hrContainer = container.firstChild;
    const dots = hrContainer?.childNodes;

    if (!dots) {
      throw new Error("dots가 존재하지 않습니다.");
    }

    expect(dots.length).toBe(100);

    dots.forEach(dot => {
      expect(dot).toHaveStyle({
        width: "9px",
        height: "1px",
        backgroundColor: "gray700",
      });
    });
  });
});
