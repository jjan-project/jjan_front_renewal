import { forwardRef, useRef } from "react";
import type { Ref } from "react";
import { mergeRefs } from "react-merge-refs";

import { Caption } from "../caption";

import * as S from "./Input.styles";
import { styleMap } from "./styleMap";
import { InputBaseProps, InputProps } from "./types";

import type { Color } from "@/theme/foundation";

const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(
  (props: InputBaseProps, ref?: Ref<HTMLInputElement>) => {
    return <S.InputReset ref={ref} {...props} />;
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
        <S.Container
          appearance={appearance}
          onClick={handleClick}
          style={style}
        >
          <S.Content>
            {isInnerLabel && (
              <S.Label>
                <Caption htmlFor={label} color={color as Color}>
                  {label}
                </Caption>
              </S.Label>
            )}
            <InputBase
              ref={mergeRefs([localRef, ref as Ref<HTMLInputElement>])}
              id={label}
              name={name}
              {...restProps}
            />
            {RenderedIcon}
          </S.Content>
        </S.Container>
      </>
    );
  },
);

export { Input };
