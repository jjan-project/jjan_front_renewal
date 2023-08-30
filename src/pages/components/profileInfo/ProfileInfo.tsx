import { IconLocationPlus } from "jjan-icon";

import { Avatar } from "@/components/avatar";
import { Flex } from "@/components/flex";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";

const ProfileInfo = () => {
  return (
    <Flex gap="20px" alignItems="center">
      <Avatar width="68px" height="68px" />
      <Stack>
        <Typo appearance="body1">콧물흘리는 맹구</Typo>
        <Flex gap="4px" alignItems="center">
          <IconLocationPlus />
          <Typo appearance="body2" color="gray700">
            서울특별시 성북구 동선동 1가
          </Typo>
        </Flex>
      </Stack>
    </Flex>
  );
};

export { ProfileInfo };
