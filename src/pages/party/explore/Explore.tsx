import { IconChevronLeftLarge, IconMenu } from "jjan-icon";

import { NAV_ITEMS } from "../constants";

import { BottomNav } from "@/components/bottomNav";
import { Box } from "@/components/box";
import { Header } from "@/components/header";
import { List } from "@/components/list";
import { Spacing } from "@/components/spacing";
import { Stack } from "@/components/stack";
import { Tabs } from "@/components/tabs";
import { Typo } from "@/components/typo";
import { PartyCard } from "@/pages/components";

const NAME = {
  FIRST: "짠 모임",
  SECOND: "나의 모임",
};

const Explore = () => {
  return (
    <Box height="100dvh">
      <Stack>
        <Box padding="0 20px">
          <Header leftIcon={<IconChevronLeftLarge />} rightIcon={<IconMenu />}>
            탐색하기
          </Header>
          <Spacing direction="vertical" size="20px" />
          <Stack>
            <Typo appearance="header2" style={{ fontWeight: "bold" }}>
              오늘은 무슨 모임이 있을까요?
            </Typo>
            <Typo appearance="body2" color="gray700">
              필터를 이용해 원하는 술자리를 고를 수 있어요.
            </Typo>
            <Spacing direction="vertical" size="25px" />

            <Tabs defaultName={NAME.FIRST}>
              <Tabs.List>
                <Tabs.Tab name={NAME.FIRST}>{NAME.FIRST}</Tabs.Tab>
                <Tabs.Tab name={NAME.SECOND}>{NAME.SECOND}</Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel name={NAME.FIRST}>
                <List gap="30px" height="calc(100dvh - 68px - 221px)">
                  {Array.from({ length: 20 }).map((_, index) => (
                    <PartyCard key={index} />
                  ))}
                </List>
              </Tabs.Panel>
              <Tabs.Panel name={NAME.SECOND}>
                <PartyCard />
              </Tabs.Panel>
            </Tabs>
          </Stack>
        </Box>
      </Stack>
      <BottomNav items={NAV_ITEMS} />
    </Box>
  );
};

export { Explore };
