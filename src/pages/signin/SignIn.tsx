import { zodResolver } from "@hookform/resolvers/zod";
import { IconChevronLeftLarge } from "jjan-icon";
import { useNavigate } from "react-router-dom";

import { FORM_DATA } from "./constants";
import { signinSchema } from "./schema";
import type { SigninSchemaType } from "./schema";

import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { Form } from "@/components/form/Form";
import { Header } from "@/components/header";
import { Layout } from "@/components/layout";
import { Stack } from "@/components/stack";
import { useSignin } from "@/services/internal/auth/query";

const Signin = () => {
  const navigate = useNavigate();
  const signinMutation = useSignin();

  const handlePrev = () => {
    navigate("/landing", {
      replace: true,
    });
  };

  const handleSignin = (data: SigninSchemaType) => {
    signinMutation.mutate(data, {
      onSuccess: () => {
        window.location.replace("/");
      },
    });
  };

  return (
    <Layout
      header={
        <Header
          leftIcon={
            <IconChevronLeftLarge
              onClick={handlePrev}
              width="14px"
              height="24px"
            />
          }
        >
          로그인
        </Header>
      }
      footer={
        <Button type="submit" form="signinForm">
          로그인
        </Button>
      }
    >
      <Box padding="0 20px">
        <Form
          onSubmit={handleSignin}
          resolver={zodResolver(signinSchema)}
          mode="onChange"
          id="signinForm"
        >
          <Stack space="space08">
            {FORM_DATA.map((input, index) => (
              <Form.Input
                key={index}
                appearance="underline"
                type={input.type as "email" | "password" | "text"}
                name={input.name}
                label={input.label}
                autoComplete={input.autoComplete}
              />
            ))}
          </Stack>
        </Form>
      </Box>
    </Layout>
  );
};

export { Signin };
