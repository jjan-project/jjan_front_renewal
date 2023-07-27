import { IconAlertEmpty, IconJjanLogo, IconLocationPlus } from "jjan-icon";

import { NAV_ITEMS } from "./constants";

import { Avatar } from "@/components/avatar";
import { BottomNav } from "@/components/bottomNav";
import { Box } from "@/components/box";
import { Flex } from "@/components/flex";
import { Header } from "@/components/header";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";

const Cards = () => (
  <Stack space="space03">
    <Flex gap="12px">
      <Flex.Item flex="2 1 0">
        <Box
          padding="16px"
          backgroundColor="violet100"
          borderRadius="15px"
          height="26dvh"
        >
          <Stack>
            <Typo appearance="body1" color="white">
              오늘은 어떤 모임이
            </Typo>
            <Typo appearance="body1" color="white">
              있을까요?
            </Typo>
          </Stack>
        </Box>
      </Flex.Item>
      <Flex.Item flex="1.6 1 0">
        <Box
          padding="16px"
          backgroundColor="green175"
          borderRadius="15px"
          height="26dvh"
        >
          <Typo appearance="body1">모임 만들기</Typo>
        </Box>
      </Flex.Item>
    </Flex>
    <Flex gap="12px">
      <Flex.Item flex="1.6 1 0">
        <Box
          padding="16px"
          backgroundColor="green175"
          borderRadius="15px"
          height="26dvh"
        >
          <Typo appearance="body1">나의 모임</Typo>
        </Box>
      </Flex.Item>
      <Flex.Item flex="2 1 0">
        <Box
          padding="16px"
          backgroundColor="violet100"
          borderRadius="15px"
          height="26dvh"
        >
          <Stack>
            <Typo appearance="body1" color="white">
              관심있는 모임
            </Typo>
            <Typo appearance="body1" color="white">
              모아보기
            </Typo>
          </Stack>
        </Box>
      </Flex.Item>
    </Flex>
  </Stack>
);

const Home = () => {
  return (
    <Box height="100dvh">
      <Flex flexDirection="column">
        <Box padding="0 20px">
          <Header
            leftIcon={<IconJjanLogo width="52px" height="28px" />}
            rightIcon={<IconAlertEmpty width="20px" height="24px" />}
          />
        </Box>
        <Box padding="0 20px" height="100%">
          <Flex flexDirection="column" justifyContent="space-evenly">
            <Flex gap="16px" justifyContent="space-between">
              <Typo appearance="header1">
                심심한 오늘, 동네 친구들과 술 한잔 어때요?
              </Typo>
              <Avatar width="68px" height="68px" />
            </Flex>
            <Cards />
            <Box padding="12px" backgroundColor="gray700" borderRadius="15px">
              <Flex alignItems="center" justifyContent="space-between">
                <Box>
                  <Flex gap="8px" alignContent="center">
                    <IconLocationPlus width="24px" height="24px" />
                    <Typo appearance="body2">나의 위치</Typo>
                  </Flex>
                </Box>
                <Typo appearance="body1">서울특별시 성북구 동선동1가</Typo>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <BottomNav items={NAV_ITEMS} />
      </Flex>
    </Box>
  );
};

export { Home };
