import {
  IconAlertEmpty,
  IconJjanLogo,
  IconLocationPlus,
  IconRightArrow,
  IconMascot1,
  IconMascot2,
  IconMascot3,
  IconMascot4,
} from "jjan-icon";
import { useNavigate, Link } from "react-router-dom";

import { Avatar } from "@/components/avatar";
import { BottomNav } from "@/components/bottomNav";
import { Box } from "@/components/box";
import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { Header } from "@/components/header";
import { Layout } from "@/components/layout";
import { Spacing } from "@/components/spacing";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";
import { NAV_ITEMS } from "@/constants/navigation";
import { useFetchUserInfo } from "@/services/internal/user/query";

const Cards = () => {
  const navigate = useNavigate();
  const moveExploreParty = () => navigate("/party-explore");

  return (
    <Stack space="space03">
      <Flex gap="12px">
        <Flex.Item flex="2 1 0">
          <Box
            padding="16px"
            backgroundColor="violet100"
            borderRadius="15px"
            height="26dvh"
            style={{ position: "relative" }}
          >
            <Stack>
              <Typo appearance="body1" color="white">
                오늘은 어떤 모임이
              </Typo>
              <Typo appearance="body1" color="white">
                있을까요?
              </Typo>
              <Flex>
                <Button
                  onClick={moveExploreParty}
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "white",
                    position: "absolute",
                    bottom: "15px",
                    left: "15px",
                  }}
                >
                  <IconRightArrow width="30px" />
                </Button>
                <IconMascot1
                  width="100px"
                  height="100px"
                  style={{
                    position: "absolute",
                    bottom: "30px",
                    right: "10px",
                  }}
                />
              </Flex>
            </Stack>
          </Box>
        </Flex.Item>
        <Flex.Item flex="1.6 1 0">
          <Link to="/party-create">
            <Box
              padding="16px"
              backgroundColor="green175"
              borderRadius="15px"
              height="26dvh"
            >
              <Stack space="space08">
                <Typo appearance="body1">모임 만들기</Typo>
                <Box centerContent>
                  <IconMascot3 width={85} height={85} />
                </Box>
              </Stack>
            </Box>
          </Link>
        </Flex.Item>
      </Flex>
      <Flex gap="12px">
        <Flex.Item flex="1.6 1 0">
          <Link to="/profile-watchlist">
            <Box
              padding="16px"
              backgroundColor="green175"
              borderRadius="15px"
              height="26dvh"
            >
              <Stack space="space08">
                <Typo appearance="body1">나의 모임</Typo>
                <Stack align="end">
                  <IconMascot2 width={100} height={100} />
                </Stack>
              </Stack>
            </Box>
          </Link>
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
              <Spacing direction="vertical" size="15px" />
              <IconMascot4 width={88} height={88} />
            </Stack>
          </Box>
        </Flex.Item>
      </Flex>
    </Stack>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const { data: userInfo } = useFetchUserInfo();

  return (
    <Layout
      header={
        <Header
          leftIcon={<IconJjanLogo width="52px" height="28px" />}
          rightIcon={
            <IconAlertEmpty
              width="20px"
              height="24px"
              onClick={() => navigate("/notifications")}
            />
          }
        />
      }
      footer={<BottomNav items={NAV_ITEMS} />}
      paddingFooter={false}
    >
      <Box height="calc(100dvh - 156px)" padding="0 20px">
        <Flex flexDirection="column" justifyContent="space-between">
          <Flex gap="16px" justifyContent="space-between">
            <Flex.Item flex="1 1 80%">
              <Typo appearance="header1">
                심심한 오늘, 동네 친구들과 술 한잔 어때요?
              </Typo>
            </Flex.Item>

            <Flex.Item flex="1 1 20%">
              {userInfo && (
                <Avatar
                  isCircle
                  width="68px"
                  height="68px"
                  src={userInfo?.profile}
                />
              )}
            </Flex.Item>
          </Flex>
          <Cards />
          <Box padding="12px" backgroundColor="gray700" borderRadius="15px">
            <Flex alignItems="center" gap="20px">
              <Box>
                <Flex gap="8px" alignContent="center">
                  <IconLocationPlus width="24px" height="24px" />
                  <Typo appearance="body2">나의 위치</Typo>
                </Flex>
              </Box>
              <Typo appearance="body1">{userInfo && userInfo.address}</Typo>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
};

export { Home };
