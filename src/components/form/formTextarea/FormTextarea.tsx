import { useFormContext } from "react-hook-form";

import { FormTextAreaProps } from "./types";

import { Stack } from "@/components/stack";
import { TextArea } from "@/components/textField";
import { Typo } from "@/components/typo";

const FormTextarea = (props: FormTextAreaProps) => {
  const { width, height, name, ...restProps } = props;
  const {
    register,
    formState: { errors },
    getValues,
  } = useFormContext();

  return (
    <Stack space="space02">
      <TextArea
        id={name}
        width={width}
        height={height}
        defaultValue={getValues(name)}
        {...restProps}
        {...register(name)}
      />
      {errors[name] && (
        <Typo appearance="body3" as="span" role="alert" color="violet400">
          {errors[name]?.message?.toString()}
        </Typo>
      )}
    </Stack>
  );
};

export { FormTextarea };
