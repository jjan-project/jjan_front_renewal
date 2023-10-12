import { IconChevronLeftLarge } from "jjan-icon";
import { useState } from "react";

import { GENDERS } from "./constants";
import { GenderSelectOption, GenderState } from "./types";

import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { Header } from "@/components/header";
import { Layout } from "@/components/layout";
import { ProgressBar } from "@/components/progressbar";
import { Select } from "@/components/select";
import { Spacing } from "@/components/spacing";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";
import { SignupSubPageProps } from "@/pages/signup/types";
import {
  setGender,
  useSignupDispatch,
  useSignupState,
} from "@/store/signupStore";

const Gender = (props: SignupSubPageProps) => {
  const { gender: defaultGender } = useSignupState();
  const { curStep, lastStep, onNextStep } = props;
  const [gender, setGenderState] = useState<GenderState>(defaultGender);
  const dispatch = useSignupDispatch();

  const handleNext = () => {
    dispatch(setGender(gender));
    onNextStep();
  };

  return (
    <Layout
      header={
        <Header
          leftIcon={
            <IconChevronLeftLarge
              onClick={handleNext}
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
            <Typo appearance="header2">성별을 알려주세요.</Typo>
            <Spacing direction="vertical" size="120px" />
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Select
                options={GENDERS}
                value={gender}
                onChange={value => setGenderState(value as GenderSelectOption)}
              />
              <hr
                style={{
                  padding: "0px",
                  margin: "0px",
                  borderTop: "1px solid #bbb",
                  width: "100%",
                }}
              />
            </Flex>
          </Stack>
          <ProgressBar curStep={curStep} totalSteps={lastStep} />
        </Flex>
      </Box>
    </Layout>
  );
};

export { Gender };
