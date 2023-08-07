import { IconChevronLeftLarge, IconCancel } from "jjan-icon";

import { BottomButton } from "../../components";

import { Box } from "@/components/box";
import { Header } from "@/components/header";
import { Spacing } from "@/components/spacing";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";

const Joined = () => {
  const onChat = () => {
    console.info("");
  };

  return (
    <Box height="100dvh">
      <Box padding="0 20px">
        <Header leftIcon={<IconChevronLeftLarge />} rightIcon={<IconCancel />}>
          회기 꽃술 6인팟!!
        </Header>
        <Spacing direction="vertical" size="20px" />
        <Stack>
          <Typo appearance="body1">참여가 완료 되었습니다!</Typo>
          <Typo appearance="body2" color="gray700">
            채팅방이 생성되었습니다. 채팅방으로 이동해주세요
          </Typo>
        </Stack>
      </Box>

      <BottomButton onClick={onChat} />
    </Box>
  );
};

export { Joined };
