import { zodResolver } from "@hookform/resolvers/zod";
import { IconBrokenHome } from "jjan-icon";

import { Button } from "../../../../../components/button";
import { Flex } from "../../../../../components/flex";
import { Form } from "../../../../../components/form";
import { ProgressBar } from "../../../../../components/progressbar/ProgressBar";
import { SignupStepProps } from "../../types";

import { SignupSchemaType, signupSchema } from "@/schema/register";
import {
  useSignupState,
  useSignupDispatch,
  setEmail,
  setPassword,
} from "@/store/signupStore";

const formData = [
  {
    type: "text",
    name: "email",
    label: "이메일",
    autoComplete: "off",
  },
  {
    type: "password",
    name: "password",
    label: "비밀번호",
    autoComplete: "off",
  },
  {
    type: "password",
    name: "confirmPassword",
    label: "비밀번호 확인",
    autoComplete: "off",
  },
];

const Email = (props: SignupStepProps) => {
  const { email } = useSignupState();
  const { curStep, maxStep, onNextStep } = props;
  const dispatch = useSignupDispatch();

  const defaultValues = {
    email,
    password: "",
    confirmPassword: "",
  };

  const handleNext = (data: SignupSchemaType) => {
    const { email, password } = data;
    dispatch(setEmail(email));
    dispatch(setPassword(password));
    onNextStep();
  };

  return (
    <Form
      onSubmit={handleNext}
      resolver={zodResolver(signupSchema)}
      defaultValues={defaultValues}
      mode="onChange"
    >
      <Flex flexGrow="1" flexDirection="column" justifyContent="space-between">
        <Flex flexDirection="column" gap="2.188rem">
          {formData.map((input, index) => (
            <Form.Input
              key={index}
              appearance="underline"
              type={input.type as "email" | "password" | "text"}
              name={input.name}
              label={input.label}
              icon={<IconBrokenHome />}
              isValidationMode
              autoComplete={input.autoComplete}
            />
          ))}
        </Flex>
        <Flex flexDirection="column" gap="2.688rem">
          <ProgressBar value={curStep} steps={maxStep} />
          <Button appearance="primary" type="submit">
            다음
          </Button>
        </Flex>
      </Flex>
    </Form>
  );
};

export { Email };
