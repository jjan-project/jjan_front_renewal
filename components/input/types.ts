import type { InputHTMLAttributes } from "react";

type InputBaseProps = InputHTMLAttributes<HTMLInputElement>;

interface InputProps extends InputBaseProps {
  isValid?: boolean;
}

export type { InputBaseProps, InputProps };
