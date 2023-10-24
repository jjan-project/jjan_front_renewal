import { IconCancel, IconChevronLeftLarge } from "jjan-icon";

import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { Header } from "@/components/header";
import { Layout } from "@/components/layout";
import { ProgressBar } from "@/components/progressbar";
import { Selectionbox } from "@/components/selectionbox";
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

  const handleNext = () => {
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
          <Stack space="space12">
            <Stack>
              <Typo appearance="header1">우리 모임을 소개하자면?</Typo>
              <Typo appearance="body2" color="gray700">
                키워드를 설정해주세요.
              </Typo>
            </Stack>
            <Selectionbox
              options={KEYWORDS}
              defaultValues={keywords}
              onChange={values => dispatch(setKeywords(new Set(values)))}
            />
          </Stack>
          <ProgressBar curStep={curStep} totalSteps={lastStep} />
        </Flex>
      </Box>
    </Layout>
  );
};

export { Keywords };
