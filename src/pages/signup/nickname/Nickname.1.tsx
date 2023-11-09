import { zodResolver } from "@hookform/resolvers/zod";
import { IconChevronLeftLarge } from "jjan-icon";
import { useState } from "react";

import { NicknameSchemaType, nicknameSchema } from "./schema";

import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { Form } from "@/components/form/Form";
import { Header } from "@/components/header";
import { Layout } from "@/components/layout";
import { ProgressBar } from "@/components/progressbar";
import { Spacing } from "@/components/spacing";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";
import { SignupSubPageProps } from "@/pages/signup/types";
import { useFetchRandomNickname } from "@/services/internal/auth/query";
import {
  setNickname,
  useSignupDispatch,
  useSignupState,
} from "@/store/signupStore";

const Nickname = (props: SignupSubPageProps) => {
  const signupState = useSignupState();

  const [name, setName] = useState<string>(signupState.nickname);
  const { curStep, lastStep, onPrevStep, onNextStep } = props;
  const dispatch = useSignupDispatch();
  const { data: nicknameData, refetch: nicknameRefetch } =
    useFetchRandomNickname();

  const handleNext = (data: NicknameSchemaType) => {
    const { nickname } = data;
    dispatch(setNickname(nickname));
    onNextStep();
  };

  const onClikcRecommendNickname = () => {
    if (nicknameData) {
      setName(nicknameData.data);
      dispatch(setNickname(nicknameData.data));
    }
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
        <Button type="submit" form="nicknameForm">
          다음
        </Button>
      }
    >
      <Box padding="0 20px" height="calc(100dvh - 174px)">
        <Flex flexDirection="column" gap="42px" justifyContent="space-between">
          <Stack>
            <Typo appearance="header2">닉네임을 만들어주세요.</Typo>
            <Spacing direction="vertical" size="120px" />
            <Form
              onSubmit={handleNext}
              resolver={zodResolver(nicknameSchema)}
              mode="onSubmit"
              id="nicknameForm"
            >
              <Form.Input
                appearance="underline"
                type="text"
                name="nickname"
                placeholder="닉네임을 입력해주세요."
                isValidationMode
                defaultValue={name}
              />
            </Form>
            <Spacing direction="vertical" size="15px" />
            {nicknameData && (
              <Flex alignItems="center" gap="10px">
                <Typo appearance="body1" onClick={onClikcRecommendNickname}>
                  {nicknameData.data}
                </Typo>
                <Typo appearance="header1" onClick={() => nicknameRefetch()}>
                  ↻
                </Typo>
              </Flex>
            )}
          </Stack>
          <ProgressBar curStep={curStep} totalSteps={lastStep} />
        </Flex>
      </Box>
    </Layout>
  );
};

export { Nickname };
