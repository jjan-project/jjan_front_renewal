import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import type { FieldValues } from "react-hook-form";

import { FormInput as Input } from "./formInput";
import type { FormProps } from "./types";

const FormBase = <TFieldValues extends FieldValues>({
  children,
  onSubmit,
  ...props
}: FormProps<TFieldValues>) => {
  const { testid } = props;

  const methods = useForm<TFieldValues>(props);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} data-testid={testid}>
        {children}
      </form>
    </FormProvider>
  );
};

const Form = Object.assign(FormBase, { Input });

export { Form };
