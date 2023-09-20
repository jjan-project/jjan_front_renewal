import { IconAlertEmpty, IconJjanLogo } from "jjan-icon";
import { useNavigate } from "react-router-dom";

import { PROFILE_OPTIONS } from "./constants";

import { BottomNav } from "@/components/bottomNav";
import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { Header } from "@/components/header";
import { Layout } from "@/pages/components/layout";
import { ProfileInfo } from "@/pages/components/profileInfo";
import { ProfileOptionPanel } from "@/pages/components/ProfileOptions";
import { NAV_ITEMS } from "@/pages/party/constants";

const HeaderContainer = (
  <Header
    leftIcon={<IconJjanLogo width="51px" height="27px" />}
    rightIcon={<IconAlertEmpty width="18px" height="24px" />}
  ></Header>
);

const Main = () => {
  const navigate = useNavigate();

  return (
    <Layout header={HeaderContainer} bottom={<BottomNav items={NAV_ITEMS} />}>
      <Box padding="0 20px" height="calc(100dvh - 52px - 68px - 20px)">
        <Flex flexDirection="column" gap="22px">
          <ProfileInfo />
          <Flex gap="12px">
            <Button onClick={() => navigate("/profile-edit")}>
              프로필 수정
            </Button>
            <Button onClick={() => navigate("/profile-watchlist")}>
              관심 목록
            </Button>
          </Flex>
          <ProfileOptionPanel options={PROFILE_OPTIONS} />
        </Flex>
      </Box>
    </Layout>
  );
};

export { Main };
