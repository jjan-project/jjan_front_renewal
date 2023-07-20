import { IconChevronLeftLarge } from "jjan-icon";

import { YEARS } from "./constants";
import { BirthdaySelectOption } from "./types";
import useBirthday from "./useBirthday";
import { getDays, getMonths } from "./utils";

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
  setBirthday,
  useSignupDispatch,
  useSignupState,
} from "@/store/signupStore";

const Birthday = (props: SignupSubPageProps) => {
  const { birthday: defaultBirthDay } = useSignupState();
  const { curStep, lastStep, onNextStep, onPrevStep } = props;
  const dispatch = useSignupDispatch();

  const [birthday, handleBirthdayChange] = useBirthday(defaultBirthDay);
  const { year, month, day } = birthday;

  const handlePrev = () => {
    onPrevStep();
  };

  const handleNext = () => {
    dispatch(setBirthday({ year, month, day }));
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
          <Flex justifyContent="center" alignItems="center">
            <Select
              options={YEARS}
              value={year}
              onChange={value =>
                handleBirthdayChange(value as BirthdaySelectOption, "year")
              }
            />
            <Select
              options={getMonths()}
              value={month}
              onChange={value =>
                handleBirthdayChange(value as BirthdaySelectOption, "month")
              }
            />
            <Select
              options={getDays(month.value, year.value)}
              value={day}
              onChange={value =>
                handleBirthdayChange(value as BirthdaySelectOption, "day")
              }
            />
          </Flex>
          <hr
            style={{
              padding: "0px",
              margin: "0px",
              borderTop: "1px solid #bbb",
              width: "100%",
            }}
          />
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

export { Birthday };
