import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";

import { Flex } from "../../../components/flex";
import { Input } from "../../../components/input";
import type { InputProps } from "../../../components/input/types";
import { Typo } from "../../typo";

type FormInputOmitProps = "name" | "type";

interface FormInputProps extends Omit<InputProps, FormInputOmitProps> {
  type: "email" | "text" | "password";
  name: string;
  isValidationMode?: boolean;
}

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
    // else {
    //   setError(name, {});
    // }
  }, []);

  return (
    <Flex flexDirection="column">
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
    </Flex>
  );
};

export { FormInput };
