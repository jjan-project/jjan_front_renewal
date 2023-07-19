import { zodResolver } from "@hookform/resolvers/zod";
import { IconChevronLeftLarge } from "jjan-icon";

import { FORM_DATA } from "./constants";
import { SignupSchemaType, signupSchema } from "./schema";

import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { Form } from "@/components/form/Form";
import { Header } from "@/components/header";
import { ProgressBar } from "@/components/progressbar";
import { Spacing } from "@/components/spacing";
import { Stack } from "@/components/stack";
import { SignupSubPageProps } from "@/pages/signup/types";
import {
  setEmail,
  setPassword,
  useSignupDispatch,
  useSignupState,
} from "@/store/signupStore";

const Email = (props: SignupSubPageProps) => {
  const { email } = useSignupState();
  const { curStep, lastStep, onNextStep, onPrevStep } = props;
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
    <Box height="100vh" padding="0 20px">
      <Flex flexDirection="column" gap="42px">
        <Header
          leftIcon={
            <IconChevronLeftLarge
              onClick={onPrevStep}
              width="14px"
              height="24px"
            />
          }
        >
          회원가입
        </Header>
        <Form
          onSubmit={handleNext}
          resolver={zodResolver(signupSchema)}
          defaultValues={defaultValues}
          mode="onChange"
          id="emailForm"
        >
          <Stack space="space08">
            {FORM_DATA.map((input, index) => (
              <Form.Input
                key={index}
                appearance="underline"
                type={input.type as "email" | "password" | "text"}
                name={input.name}
                label={input.label}
                icon={<IconChevronLeftLarge />}
                isValidationMode
                autoComplete={input.autoComplete}
              />
            ))}
          </Stack>
        </Form>
        <Spacing direction="vertical" fill={true} />
        <Box>
          <ProgressBar curStep={curStep} totalSteps={lastStep} />
          <Spacing direction="vertical" size="42px" />
          <Button type="submit" form="emailForm">
            다음
          </Button>
          <Spacing direction="vertical" size="32px" />
        </Box>
      </Flex>
    </Box>
  );
};

export { Email };
