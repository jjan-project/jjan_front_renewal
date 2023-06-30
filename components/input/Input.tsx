import React, { forwardRef, useRef } from "react";
import type { Ref } from "react";
import { mergeRefs } from "react-merge-refs";

import type { Color } from "../../src/theme/foundation";
import { Caption } from "../caption";

import { label as labelStyle, content, textInput, varients } from "./Input.css";
import { styleMap } from "./styleMap";
import { InputBaseProps, InputProps } from "./types";

const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(
  (props: InputBaseProps, ref?: Ref<HTMLInputElement>) => {
    return <input ref={ref} className={textInput} {...props} />;
  },
);

const Input = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref?: Ref<HTMLInputElement>) => {
    const localRef = useRef<HTMLInputElement>(null);
    const {
      isValid,
      style,
      icon,
      label,
      labelPostion = "inner",
      appearance,
      name,
      ...restProps
    } = props;

    const { color } = styleMap[appearance];
    const isOuterLabel = label && labelPostion === "outer";
    const isInnerLabel = label && labelPostion === "inner";
    let RenderedIcon;

    if (icon) {
      switch (isValid) {
        case true:
          RenderedIcon = icon;
          break;
        case false:
          RenderedIcon = null;
          break;
        default:
          RenderedIcon = null;
      }
    }

    const handleClick = () => {
      localRef.current?.focus();
    };

    return (
      <>
        {isOuterLabel && (
          <Caption htmlFor={label} color={color as Color}>
            {label}
          </Caption>
        )}
        <div
          className={varients[appearance]}
          onClick={handleClick}
          style={style}
        >
          <div className={content}>
            {isInnerLabel && (
              <div className={labelStyle}>
                <Caption htmlFor={label} color={color as Color}>
                  {label}
                </Caption>
              </div>
            )}
            <InputBase
              ref={mergeRefs([localRef, ref as Ref<HTMLInputElement>])}
              id={label}
              name={name}
              {...restProps}
            />
            {RenderedIcon}
          </div>
        </div>
      </>
    );
  },
);

export { Input };
