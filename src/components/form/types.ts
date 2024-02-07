import type { HTMLAttributes } from "react";
import type { FieldValues, SubmitHandler, UseFormProps } from "react-hook-form";

import { BaseTest } from "../types/base";

type FormProps<TFieldValues extends FieldValues> = UseFormProps<TFieldValues> &
  Omit<HTMLAttributes<HTMLFormElement>, "onSubmit"> & {
    onSubmit: SubmitHandler<TFieldValues> | ((data: TFieldValues) => void);
  } & BaseTest;

interface FormMethods {
  setGlobalError: (error: string) => void;
}

export type { FormProps, FormMethods };
