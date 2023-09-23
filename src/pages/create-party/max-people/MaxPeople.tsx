import { IconCancel, IconChevronLeftLarge } from "jjan-icon";
import { useState } from "react";

import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { Header } from "@/components/header";
import { ProgressBar } from "@/components/progressbar";
import ScrollSelect from "@/components/scrollSelect/ScrollSelect";
import { Spacing } from "@/components/spacing";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";
import { PartyFormSubPageProps } from "@/pages/create-party/types";
import {
  setMaxPeople,
  usePartyFormDispatch,
  usePartyFormState,
} from "@/store/partyStore";

const PEOPLE_COUNT = [
  "1명",
  "2명",
  "3명",
  "4명",
  "5명",
  "6명",
  "7명",
  "8명",
  "9명",
  "10명",
  "11명",
  "12명",
];

const MaxPeople = (props: PartyFormSubPageProps) => {
  const { maxPeople } = usePartyFormState();
  const { curStep, lastStep, onPrevStep, onNextStep } = props;
  const dispatch = usePartyFormDispatch();

  const [selectedCount, setSelectedCount] = useState(maxPeople);

  const handleNext = () => {
    dispatch(setMaxPeople(selectedCount || ""));

    onNextStep();
  };

  return (
    <Box height="100vh" padding="0 20px">
      <Flex flexDirection="column" gap="42px">
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
          <Typo appearance="header1">인원 수를 선택해주세요.</Typo>
          <Typo appearance="body2" color="gray700">
            최대 인원은 12명까지 가능해요.
          </Typo>
        </Stack>
        <ScrollSelect
          list={PEOPLE_COUNT}
          height={150}
          onSelectedChange={value => setSelectedCount(value as string)}
        />
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

export { MaxPeople };
