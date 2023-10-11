import { IconLocationPlus } from "jjan-icon";

import { Avatar } from "@/components/avatar";
import { Box } from "@/components/box";
import { Flex } from "@/components/flex";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";
import { useFetchUserInfo } from "@/services/internal/user/query";

const ProfileInfo = () => {
  const { data: userInfo } = useFetchUserInfo();

  if (!userInfo) return;

  return (
    <Flex gap="20px" alignItems="center">
      {userInfo.profile === "blank" ? (
        <Box
          width="68px"
          height="68px"
          backgroundColor="gray800"
          borderRadius="50%"
          overflow="hidden"
        />
      ) : (
        <Avatar isCircle width="68px" height="68px" src={userInfo?.profile} />
      )}
      <Stack>
        <Typo appearance="body1">{userInfo.nickName}</Typo>
        <Flex gap="4px" alignItems="center">
          <IconLocationPlus />
          <Typo appearance="body2" color="gray700">
            {userInfo.address}
          </Typo>
        </Flex>
      </Stack>
    </Flex>
  );
};

export { ProfileInfo };
