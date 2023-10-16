import { IconCancel, IconChevronLeftLarge } from "jjan-icon";
import { useState } from "react";

import { generateTimeIncrements } from "./utils";

import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { Calendar } from "@/components/calendar";
import { Flex } from "@/components/flex";
import { Header } from "@/components/header";
import { Layout } from "@/components/layout";
import { ProgressBar } from "@/components/progressbar";
import ScrollSelect from "@/components/scrollSelect/ScrollSelect";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";
import { PartyFormSubPageProps } from "@/pages/create-party/types";
import {
  setDate,
  setTime,
  usePartyFormDispatch,
  usePartyFormState,
} from "@/store/partyStore";

const Schedule = (props: PartyFormSubPageProps) => {
  const { date, time } = usePartyFormState();
  const { curStep, lastStep, onPrevStep, onNextStep } = props;
  const dispatch = usePartyFormDispatch();

  const [selectedDay, setSelectedDay] = useState<Date | null>(date as Date);
  const [selectedTime, setSelectedTime] = useState<string>(time as string);

  const handleNext = () => {
    dispatch(setDate(selectedDay as Date));
    dispatch(setTime(selectedTime));

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
          rightIcon={<IconCancel width="22px" height="22px" />}
        >
          모임만들기
        </Header>
      }
      footer={<Button onClick={handleNext}>다음</Button>}
    >
      <Box padding="0 20px" height="calc(100dvh - 174px)">
        <Flex flexDirection="column" gap="42px" justifyContent="space-between">
          <Stack>
            <Typo appearance="header1">언제 몇시에 만날까요?</Typo>
            <Typo appearance="body1" color="gray700">
              모임 날짜와 시간을 선택해주세요
            </Typo>
          </Stack>
          <Calendar
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            isPrevMonth
            isNextMonth
          />
          <ScrollSelect
            list={generateTimeIncrements()}
            height={150}
            onSelectedChange={time => setSelectedTime(time as string)}
          />
          <ProgressBar curStep={curStep} totalSteps={lastStep} />
        </Flex>
      </Box>
    </Layout>
  );
};

export { Schedule };
