import { forwardRef, ForwardedRef, useState, ChangeEvent } from "react";

import type { TextAreaProps } from "./types";
import "./TextArea.css";

const TextArea = (
  props: TextAreaProps,
  ref: ForwardedRef<HTMLTextAreaElement>,
) => {
  const {
    defaultValue,
    width = "200px",
    height = "150px",
    minLength,
    maxLength = 60,
    testId,
    ...otherProps
  } = props;

  const [value, setValue] = useState(
    defaultValue ? String(defaultValue).slice(0, maxLength) : "",
  );

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = event.target.value;
    if (inputText.length > maxLength) {
      event.preventDefault();
      return;
    }
    setValue(inputText);
  };

  return (
    <div className="textarea-container" style={{ width, height }}>
      <textarea
        {...otherProps}
        ref={ref}
        className="textarea"
        value={value}
        onChange={handleInputChange}
        minLength={minLength}
        maxLength={maxLength}
        data-testid={testId}
      />
      <small className="textarea-word-count">
        {String(value).length} / 최대 {maxLength}자
      </small>
    </div>
  );
};

const _TextArea = forwardRef(TextArea);
export { _TextArea as TextArea };
