import { IconChevronLeftLarge } from "jjan-icon";
import { useState } from "react";

import { GENDERS } from "./constants";
import { GenderSelectOption, GenderState } from "./types";

import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { Header } from "@/components/header";
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
  const { curStep, lastStep, onNextStep, onPrevStep } = props;
  const [gender, setGenderState] = useState<GenderState>(defaultGender);
  const dispatch = useSignupDispatch();

  const handlePrev = () => {
    onPrevStep();
  };

  const handleNext = () => {
    dispatch(setGender(gender));
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
        <Spacing direction="vertical" fill={true} />
        <Box>
          <ProgressBar curStep={curStep} totalSteps={lastStep} />
          <Spacing direction="vertical" size="42px" />
          <Button onClick={handleNext}>다음</Button>
          <Spacing direction="vertical" size="32px" />
        </Box>
      </Flex>
    </Box>
  );
};

export { Gender };
