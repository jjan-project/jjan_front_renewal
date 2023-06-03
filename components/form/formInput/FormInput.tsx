/**
 * 예제로 작성한 FormInput 컴포넌트입니다.
 */

import React from "react";
import { useFormContext } from "react-hook-form";

interface InputProps {
  type: "text" | "password" | "email" | "file";
  name: string;
}

const FormInput = (props: InputProps) => {
  const { type, name } = props;
  const { register, formState } = useFormContext();
  const { errors } = formState;

  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input type={type} id={name} {...register(name)} />
      {errors[name] && <p role="alert">{errors[name]?.message?.toString()}</p>}
    </>
  );
};

export { FormInput };
