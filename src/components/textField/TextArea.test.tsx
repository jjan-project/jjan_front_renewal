import { render, fireEvent } from "@testing-library/react";
import { vi } from "vitest";

import { TextArea } from "./TextArea";

describe("TextArea 컴포넌트", () => {
  test("width와 height가 올바르게 적용되어야 합니다.", () => {
    const { container } = render(<TextArea width="1000px" height="800px" />);
    const textareaContainer = container.querySelector(".textarea-container");

    expect(textareaContainer).toHaveStyle("width: 1000px");
    expect(textareaContainer).toHaveStyle("height: 800px");
  });

  test("minLength와 maxLength가 올바르게 적용되고 span태그에 표시되어야 합니다.", async () => {
    const { getByText, getByTestId } = render(
      <TextArea
        defaultValue={"5글자가넘는매우긴문장"}
        minLength={2}
        maxLength={5}
        testId="textBox"
      />,
    );
    const wordCount = getByText(/\/ 최대/);
    expect(wordCount).toHaveTextContent("5 / 최대 5자");

    const textArea = getByTestId("textBox");

    const minLength = textArea.getAttribute("minlength");
    expect(minLength).toBe("2");

    const maxLength = textArea.getAttribute("maxLength");
    expect(maxLength).toBe("5");

    const { textContent } = textArea;
    expect(textContent?.length).toBe(5);
  });

  test("placeholder가 올바르게 적용되어야 합니다.", () => {
    const placeholderText = "입력하는 장소..";
    const { getByTestId } = render(
      <TextArea placeholder={placeholderText} testId="textBox" />,
    );
    const textarea = getByTestId("textBox");

    expect(textarea).toHaveAttribute("placeholder", placeholderText);
  });

  test("disabled 옵션이 설정되면 클릭이 안되어야 합니다.", () => {
    const handleClick = vi.fn();
    const { getByTestId } = render(
      <TextArea disabled testId="textBox" onClick={handleClick} />,
    );
    const textarea = getByTestId("textBox");

    fireEvent.click(textarea);

    expect(handleClick).not.toHaveBeenCalled();
  });
});
