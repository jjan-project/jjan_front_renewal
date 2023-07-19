import { zodResolver } from "@hookform/resolvers/zod";
import { IconChevronLeftLarge } from "jjan-icon";

import { NicknameSchemaType, nicknameSchema } from "./schema";

import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { Form } from "@/components/form/Form";
import { Header } from "@/components/header";
import { ProgressBar } from "@/components/progressbar";
import { Spacing } from "@/components/spacing";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";
import { SignupSubPageProps } from "@/pages/signup/types";
import {
  setNickname,
  useSignupDispatch,
  useSignupState,
} from "@/store/signupStore";

const Nickname = (props: SignupSubPageProps) => {
  const { curStep, lastStep, onNextStep, onPrevStep } = props;
  const dispatch = useSignupDispatch();

  const handlePrev = () => {
    onPrevStep();
  };

  const handleNext = (data: NicknameSchemaType) => {
    const { nickname } = data;
    dispatch(setNickname(nickname));
    onNextStep();
  };

  return (
    <Box height="100vh" padding="0 20px">
      <Flex flexDirection="column" gap="42px">
        <Header
          leftIcon={
            <IconChevronLeftLarge
              onClick={handlePrev}
              width="14px"
              height="24px"
            />
          }
        >
          회원가입
        </Header>
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
              defaultValue={useSignupState().nickname}
            />
          </Form>
        </Stack>
        <Spacing direction="vertical" fill={true} />
        <Box>
          <ProgressBar curStep={curStep} totalSteps={lastStep} />
          <Spacing direction="vertical" size="42px" />
          <Button type="submit" form="nicknameForm">
            다음
          </Button>
          <Spacing direction="vertical" size="32px" />
        </Box>
      </Flex>
    </Box>
  );
};

export { Nickname };
