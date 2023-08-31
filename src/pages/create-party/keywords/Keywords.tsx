import { IconCancel, IconChevronLeftLarge } from "jjan-icon";
import { useState } from "react";

import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { Header } from "@/components/header";
import { ProgressBar } from "@/components/progressbar";
import { Selectionbox } from "@/components/selectionbox/Selectionbox";
import { Spacing } from "@/components/spacing";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";
import { PartyFormSubPageProps } from "@/pages/create-party/types";
import {
  setKeywords,
  usePartyFormDispatch,
  usePartyFormState,
} from "@/store/partyStore";

const KEYWORDS = [
  "외향적인",
  "내향적인",
  "술꾼들",
  "알쓰",
  "시끄러운",
  "조용한",
  "친구끼리",
  "소통",
  "칵테일바",
  "파티룸",
  "와인바",
  "술집",
  "미팅",
  "소주",
  "맥주",
  "대학생",
  "직장인",
  "친해져요",
];

const Keywords = (props: PartyFormSubPageProps) => {
  const { keywords } = usePartyFormState();
  const { curStep, lastStep, onPrevStep, onNextStep } = props;
  const dispatch = usePartyFormDispatch();

  const [selectedKeywords, setSelectedKeywords] = useState(keywords);

  const handleNext = () => {
    dispatch(setKeywords(selectedKeywords));

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
          <Typo appearance="header1">우리 모임을 소개하자면?</Typo>
          <Typo appearance="body2" color="gray700">
            키워드를 설정해주세요.
          </Typo>
        </Stack>
        <Selectionbox
          options={KEYWORDS}
          onChange={values => setSelectedKeywords(new Set(values))}
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

export { Keywords };
