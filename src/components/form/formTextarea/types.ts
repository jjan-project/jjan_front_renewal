import { TextAreaProps } from "@/components/textField";

type FormTextAreaOmitProps = "name";

type FormTextAreaProps = { name: string } & Omit<
  TextAreaProps,
  FormTextAreaOmitProps
>;

export type { FormTextAreaProps };
