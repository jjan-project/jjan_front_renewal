import type { PropsWithChildren } from "react";
import type { FieldValues, SubmitHandler, UseFormProps } from "react-hook-form";

import { BaseTest } from "../types/base";

type ExternalUseFormProps<TFieldValues extends FieldValues> = {
  onSubmit: SubmitHandler<TFieldValues>;
};

type FormProps<TFieldValues extends FieldValues> = UseFormProps<TFieldValues> &
  PropsWithChildren &
  ExternalUseFormProps<TFieldValues> &
  BaseTest;

export type { ExternalUseFormProps, FormProps };
