import { IconChevronLeftLarge } from "jjan-icon";
import { useState } from "react";

import { LabelCheckBox } from "../../components";

import { Box } from "@/components/box";
import { Flex } from "@/components/flex";
import { Header } from "@/components/header";
import { Hr } from "@/components/hr";
import { Slider } from "@/components/slider";
import { Spacing } from "@/components/spacing";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";
import { Layout } from "@/pages/components/layout";

const Filter = () => {
  const [distance, setDistance] = useState<number>(0);
  const [memberCnt, setMemberCnt] = useState<number>(1);

  const [isCheckedRecent, setIsCheckedRecent] = useState(true);
  const [isCheckedNear, setIsCheckedNear] = useState(false);

  const handleRecentToggle = (checked: boolean) => {
    setIsCheckedRecent(checked);
  };

  const handleNearToggle = (checked: boolean) => {
    setIsCheckedNear(checked);
  };

  const HeaderContainer = (
    <Header leftIcon={<IconChevronLeftLarge />}>필터</Header>
  );

  return (
    <Layout header={HeaderContainer}>
      <Box padding="0 20px">
        <Typo appearance="body1">정렬</Typo>
        <Spacing direction="vertical" size="10px" />
        <Stack space="space01">
          <LabelCheckBox
            label="최신순"
            id="1"
            isChecked={isCheckedRecent}
            onToggle={handleRecentToggle}
          />
          <LabelCheckBox
            label="가까운 위치순"
            id="2"
            isChecked={isCheckedNear}
            onToggle={handleNearToggle}
          />
        </Stack>
        <Spacing direction="vertical" size="10px" />

        <Hr type="dotted" />
        <Spacing direction="vertical" size="20px" />

        <Typo appearance="body1">어떤 술 모임에 가고 싶으세요?</Typo>
        <Spacing direction="vertical" size="20px" />
        {/* 여기는 파티 태그 자리입니다. */}

        <Stack space="space01">
          <Flex justifyContent="flex-start">
            <Typo appearance="body1">동네 반경 범위</Typo>
          </Flex>
          <Flex justifyContent="flex-end">
            <Typo appearance="body2">{distance} m</Typo>
          </Flex>
          <Slider
            min={0}
            max={6000}
            step={10}
            value={distance}
            setValue={setDistance}
          />
        </Stack>

        <Spacing direction="vertical" size="30px" />

        <Stack space="space01">
          <Flex justifyContent="flex-start">
            <Typo appearance="body1">모임 인원을 선택해주세요.</Typo>
          </Flex>
          <Flex justifyContent="flex-end">
            <Typo appearance="body2">{`${memberCnt}~${memberCnt + 2}`} 명</Typo>
          </Flex>
          <Slider min={1} max={10} value={memberCnt} setValue={setMemberCnt} />
        </Stack>

        <Spacing direction="vertical" size="30px" />

        <Typo appearance="body1">연령대</Typo>
        {/* 여기는 파티 태그 자리입니다. */}
      </Box>
    </Layout>
  );
};

export { Filter };
