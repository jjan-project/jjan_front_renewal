import { forwardRef, useEffect, useImperativeHandle } from "react";
import type { Ref, FormEventHandler } from "react";
import { useForm, FormProvider } from "react-hook-form";
import type { FieldValues } from "react-hook-form";

import { Typo } from "../typo";

import { FormInput as Input } from "./formInput";
import { FormTextarea as Textarea } from "./formTextarea";
import { ImageUploader } from "./imageUploader";
import type { FormMethods, FormProps } from "./types";

const FormBase = forwardRef(
  <TFieldValues extends FieldValues>(
    props: FormProps<TFieldValues>,
    ref?: Ref<FormMethods>,
  ) => {
    const { children, onSubmit, testId, id, ...restProps } = props;
    const methods = useForm<TFieldValues>(restProps);
    const { isValidating, errors } = methods.formState;

    const handleGlobalError = (error: string) => {
      methods.setError("root.serverError", { message: error });
    };

    const handleSubmit: FormEventHandler = e => {
      e.preventDefault();
      methods.handleSubmit(onSubmit)();
      methods.clearErrors();
    };

    useImperativeHandle(ref, () => ({
      setGlobalError: handleGlobalError,
    }));

    useEffect(() => {
      methods.clearErrors("root.serverError");
    }, [isValidating, methods]);

    return (
      <FormProvider {...methods}>
        <form id={id} onSubmit={handleSubmit} data-testid={testId}>
          {children}
        </form>
        {errors.root?.serverError && (
          <Typo appearance="body3" color="violet400" role="alert">
            {errors.root.serverError.message}
          </Typo>
        )}
      </FormProvider>
    );
  },
  /**
   * @Todo - refactor type assertion
   */
) as <TFieldValues extends FieldValues>(
  props: FormProps<TFieldValues> & { ref?: Ref<FormMethods> },
) => JSX.Element;

const Form = Object.assign(FormBase, {
  Input,
  Textarea,
  ImageUploader,
});

export { Form };
