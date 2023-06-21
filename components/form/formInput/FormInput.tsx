/**
 * 예제로 작성한 FormInput 컴포넌트입니다.
 */

import { IconBrokenHome } from "jjan-icon";
import React from "react";
import { useFormContext } from "react-hook-form";

import { Input } from "../../input";
import { Typo } from "../../typo";

interface InputProps {
  type: "text" | "password" | "email" | "file";
  name: string;
}

const FormInput = (props: InputProps) => {
  const { type, name } = props;
  const { register, formState } = useFormContext();
  const { errors, touchedFields } = formState;

  return (
    <>
      <Input
        appearance="underline"
        label={name}
        type={type}
        id={name}
        icon={<IconBrokenHome />}
        isValid={!errors[name] && touchedFields[name]}
        {...register(name)}
      />
      {errors[name] && (
        <Typo appearance="body3" as="span" role="alert" color="violet400">
          {errors[name]?.message?.toString()}
        </Typo>
      )}
    </>
  );
};

export { FormInput };
