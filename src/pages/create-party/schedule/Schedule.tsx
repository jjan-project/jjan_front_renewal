import { IconCancel, IconChevronLeftLarge } from "jjan-icon";
import { useState } from "react";

import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { Calendar } from "@/components/calendar";
import { Flex } from "@/components/flex";
import { Header } from "@/components/header";
import { ProgressBar } from "@/components/progressbar";
import ScrollSelect from "@/components/scrollSelect/ScrollSelect";
import { Spacing } from "@/components/spacing";
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

  const handleSubmit = () => {
    dispatch(setDate(selectedDay as Date));
    dispatch(setTime(selectedTime));

    onNextStep();
  };

  return (
    <Box height="100vh" padding="0 20px">
      <Flex flexDirection="column" gap="5dvh">
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
          모임 만들기
        </Header>
        <Stack>
          <Typo appearance="header1">우리의 모임 이른은?</Typo>
          <Typo appearance="body1">모임 날짜와 시간을 선택해주세요</Typo>
        </Stack>
        <Calendar
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          isPrevMonth
          isNextMonth
        />
        <ScrollSelect
          list={["item1", "item2", "item3"]}
          height={150}
          onSelectedChange={time => setSelectedTime(time as string)}
        />
        <Spacing direction="vertical" fill={true} />
        <Box>
          <ProgressBar curStep={curStep} totalSteps={lastStep} />
          <Spacing direction="vertical" size="5dvh" />
          <Button onClick={handleSubmit}>다음</Button>
          <Spacing direction="vertical" size="3dvh" />
        </Box>
      </Flex>
    </Box>
  );
};

export { Schedule };
