import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";

import { FormInputProps } from "./types";

import { Input } from "@/components/input";
import { Typo } from "@/components/typo";

const FormInput = (props: FormInputProps) => {
  const { name, type, isValidationMode = false, ...restProps } = props;
  const [isValid, setIsValid] = useState<boolean>(false);
  const {
    register,
    formState: { errors, dirtyFields },
    getValues,
  } = useFormContext();

  const calculateValidity = () => {
    if (isValidationMode) {
      return !errors[name] && dirtyFields[name];
    }
    return true;
  };

  useEffect(() => {
    setIsValid(calculateValidity());
  }, [errors[name], dirtyFields[name]]);

  useEffect(() => {
    if (isValidationMode && getValues(name)) {
      setIsValid(true);
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Input
        id={name}
        type={type}
        isValid={isValid}
        {...restProps}
        {...register(name)}
      />
      {errors[name] && (
        <Typo appearance="body3" as="span" role="alert" color="violet400">
          {errors[name]?.message?.toString()}
        </Typo>
      )}
    </div>
  );
};

export { FormInput };
