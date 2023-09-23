import { IconLocationPlus } from "jjan-icon";
import { useEffect, useState } from "react";

import { AuthResponseData } from "@/api/jjan/types";
import { fetchUserInfo } from "@/api/jjan/userController";
import { Avatar } from "@/components/avatar";
import { Box } from "@/components/box";
import { Flex } from "@/components/flex";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";

const ProfileInfo = () => {
  const [userInfo, setUserInfo] = useState<AuthResponseData>();

  const onFetchUserInfo = async () => {
    try {
      const response = await fetchUserInfo();
      setUserInfo(response);
    } catch (error) {
      console.error("Error while verifying JWT Token", error);
    }
  };

  useEffect(() => {
    onFetchUserInfo();
  }, []);

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
