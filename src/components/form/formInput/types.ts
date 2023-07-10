import { InputProps } from "@/components/input";

type FormInputOmitProps = "name" | "type";

type FormInputProps = {
  type: "email" | "text" | "password";
  name: string;
  isValidationMode?: boolean;
} & Omit<InputProps, FormInputOmitProps>;

export type { FormInputOmitProps, FormInputProps };
