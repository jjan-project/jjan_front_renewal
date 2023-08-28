import { useForm, FormProvider } from "react-hook-form";
import type { FieldValues } from "react-hook-form";

import { FormInput as Input } from "./formInput";
import { FormTextarea as Textarea } from "./formTextarea";
import { ImageUploader } from "./imageUploader";
import type { FormProps } from "./types";

const FormBase = <TFieldValues extends FieldValues>({
  children,
  onSubmit,
  ...props
}: FormProps<TFieldValues>) => {
  const { testId, id } = props;

  const methods = useForm<TFieldValues>(props);

  return (
    <FormProvider {...methods}>
      <form
        id={id}
        onSubmit={methods.handleSubmit(onSubmit)}
        data-testid={testId}
      >
        {children}
      </form>
    </FormProvider>
  );
};

const Form = Object.assign(FormBase, { Input, Textarea, ImageUploader });

export { Form };
