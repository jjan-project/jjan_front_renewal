import { IconChevronLeftLarge } from "jjan-icon";

import { YEARS } from "./constants";
import { BirthdaySelectOption } from "./types";
import { useBirthday } from "./useBirthday";
import { getDays, getMonths } from "./utils";

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
  setBirthday,
  useSignupDispatch,
  useSignupState,
} from "@/store/signupStore";

const Birthday = (props: SignupSubPageProps) => {
  const { birthday: defaultBirthDay } = useSignupState();
  const { curStep, lastStep, onPrevStep, onNextStep } = props;
  const dispatch = useSignupDispatch();

  const [birthday, handleBirthdayChange] = useBirthday(defaultBirthDay);
  const { year, month, day } = birthday;

  const handleNext = () => {
    dispatch(setBirthday({ year, month, day }));
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
          <ProgressBar curStep={curStep} totalSteps={lastStep} />
        </Flex>
      </Box>
    </Layout>
  );
};

export { Birthday };
