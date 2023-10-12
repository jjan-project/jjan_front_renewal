import { zodResolver } from "@hookform/resolvers/zod";
import { IconCheck, IconChevronLeftLarge } from "jjan-icon";

import { FORM_DATA } from "./constants";
import { SignupSchemaType, signupSchema } from "./schema";

import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { Form } from "@/components/form/Form";
import { Header } from "@/components/header";
import { Layout } from "@/components/layout";
import { ProgressBar } from "@/components/progressbar";
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
  const dispatch = useSignupDispatch();
  const { curStep, lastStep, onPrevStep, onNextStep } = props;

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
    <Layout
      header={
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
      }
      footer={
        <Button type="submit" form="emailForm">
          다음
        </Button>
      }
    >
      <Box padding="0 20px" height="calc(100dvh - 174px)">
        <Flex flexDirection="column" gap="42px" justifyContent="space-between">
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
                  icon={<IconCheck />}
                  isValidationMode
                  autoComplete={input.autoComplete}
                />
              ))}
            </Stack>
          </Form>
          <ProgressBar curStep={curStep} totalSteps={lastStep} />
        </Flex>
      </Box>
    </Layout>
  );
};

export { Email };
