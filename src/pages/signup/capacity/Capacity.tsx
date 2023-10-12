import { IconChevronLeftLarge } from "jjan-icon";
import { useState } from "react";

import {
  DISPLAY_TEXT_MAP,
  SLIDER_MAX_VALUE,
  SLIDER_MIN_VALUE,
  STEP,
} from "./constants";

import glassesImg from "@/assets/glasses.png";
import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { Header } from "@/components/header";
import { Layout } from "@/components/layout";
import { ProgressBar } from "@/components/progressbar";
import { Slider } from "@/components/slider";
import { Spacing } from "@/components/spacing";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";
import { SignupSubPageProps } from "@/pages/signup/types";
import {
  setCapacity,
  useSignupDispatch,
  useSignupState,
} from "@/store/signupStore";

const Capacity = (props: SignupSubPageProps) => {
  const { capacity } = useSignupState();
  const { curStep, lastStep, onPrevStep, onNextStep } = props;
  const [localCapacity, setLocalCapacity] = useState<number>(capacity || 0);
  const dispatch = useSignupDispatch();

  const handleNext = () => {
    dispatch(setCapacity(localCapacity));
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
        <Button type="submit" onClick={handleNext}>
          다음
        </Button>
      }
    >
      <Box padding="0 20px" height="calc(100dvh - 174px)">
        <Flex flexDirection="column" gap="42px" justifyContent="space-between">
          <Stack>
            <Typo appearance="header2">본인의 주량을 알려주세요.</Typo>
            <Spacing direction="vertical" size="124px" />
            <Stack align="center">
              <img src={glassesImg} width="174px" height="164px" />
              <Spacing direction="vertical" size="58px" />
              <Typo appearance="header2">
                {DISPLAY_TEXT_MAP[localCapacity]}
              </Typo>
              <Spacing direction="vertical" size="24px" />
              <Slider
                min={SLIDER_MIN_VALUE}
                max={SLIDER_MAX_VALUE}
                step={STEP}
                value={localCapacity}
                setValue={setLocalCapacity}
              />
            </Stack>
          </Stack>
          <ProgressBar curStep={curStep} totalSteps={lastStep} />
        </Flex>
      </Box>
    </Layout>
  );
};

export { Capacity };
