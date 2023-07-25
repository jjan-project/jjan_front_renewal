import { Meta } from "@storybook/react";
import { IconPerson } from "jjan-icon";

import { Tabs } from "./Tabs";
import type { TabsProps } from "./types";

import { Box } from "@/components/box";

export default {
  title: "Tabs",
  component: Tabs,
} as Meta;

const NAME = {
  FIRST: "짠 모임",
  SECOND: "나의 모임",
  THIRD: "Test",
};

const CONTENTS = {
  FIRST: `짠 모임 더미 텍스트 짠 모임 더미 텍스트 짠 모임 더미 텍스트 짠 모임
  더미 텍스트 짠 모임 더미 텍스트 짠 모임 더미 텍스트 짠 모임 더미
  텍스트 짠 모임 더미 텍스트 짠 모임 더미 텍스트 짠 모임 더미 텍스트 짠
  모임 더미 텍스트 짠 모임 더미 텍스트 짠 모임 더미 텍스트 짠 모임 더미
  텍스트 짠 모임 더미 텍스트 짠 모임 더미 텍스트 짠 모임 더미 텍스트`,
  SECOND: "나의 모임 콘텐츠",
  THIRD: "Tabs.Tab의 영문자 lint height 테스트용",
};

export const Default = (args: TabsProps) => {
  return (
    <Box width="358px" padding="20px">
      <Tabs {...args}>
        <Tabs.List>
          <Tabs.Tab name={NAME.FIRST}>{NAME.FIRST}</Tabs.Tab>

          <Tabs.Tab isDisable name={NAME.SECOND}>
            {NAME.SECOND}
          </Tabs.Tab>

          <Tabs.Tab name={NAME.THIRD} leftIcon={<IconPerson />}>
            {NAME.THIRD}
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel name={NAME.FIRST}>{CONTENTS.FIRST}</Tabs.Panel>

        <Tabs.Panel name={NAME.SECOND}>{CONTENTS.SECOND}</Tabs.Panel>

        <Tabs.Panel name={NAME.THIRD}>{CONTENTS.THIRD}</Tabs.Panel>
      </Tabs>
    </Box>
  );
};
Default.args = {
  defaultName: NAME.FIRST,
  appearance: "primary",
};
