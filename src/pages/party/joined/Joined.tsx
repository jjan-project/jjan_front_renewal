import { IconChevronLeftLarge, IconCancel } from "jjan-icon";

import { BottomButton } from "../../components";

import { Box } from "@/components/box";
import { Header } from "@/components/header";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";
import { Layout } from "@/pages/components/layout";

const Joined = () => {
  const onChat = () => {
    console.info("");
  };

  const HeaderContainer = (
    <Header leftIcon={<IconChevronLeftLarge />} rightIcon={<IconCancel />}>
      회기 꽃술 6인팟!!
    </Header>
  );

  return (
    <Layout header={HeaderContainer} bottom={<BottomButton onClick={onChat} />}>
      <Box padding="0 20px">
        <Stack>
          <Typo appearance="body1">참여가 완료 되었습니다!</Typo>
          <Typo appearance="body2" color="gray700">
            채팅방이 생성되었습니다. 채팅방으로 이동해주세요
          </Typo>
        </Stack>
      </Box>
    </Layout>
  );
};

export { Joined };
