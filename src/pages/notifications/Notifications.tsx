import { IconChevronLeftLarge, IconPeopleGroup } from "jjan-icon";
import { useNavigate } from "react-router-dom";

import { Box } from "@/components/box";
import { Flex } from "@/components/flex";
import { Header } from "@/components/header";
import { Layout } from "@/components/layout";
import { List } from "@/components/list";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";

const CardInfo = () => {
  return (
    <Stack>
      <Box>
        <Typo
          appearance="body2"
          color="violet100"
          style={{ fontWeight: "bold" }}
        >
          회기 꽃술 6인팟!!
        </Typo>{" "}
        <Typo appearance="body2" color="black" style={{ fontWeight: "bold" }}>
          모임이 개설되었어요.
        </Typo>
      </Box>

      <Typo appearance="body3" color="black" style={{ fontWeight: "bold" }}>
        30초 전
      </Typo>
    </Stack>
  );
};

const CardIcon = () => {
  return (
    <Box
      padding="4px"
      width="45px"
      height="45px"
      backgroundColor="gray700"
      borderRadius="15px"
    >
      <IconPeopleGroup width="100%" height="100%" />
    </Box>
  );
};

const Card = () => {
  return (
    <Flex gap="18px" alignItems="center">
      <CardIcon />
      <CardInfo />
    </Flex>
  );
};

const Notifications = () => {
  const navigate = useNavigate();

  const HeaderContainer = (
    <Header leftIcon={<IconChevronLeftLarge onClick={() => navigate(-1)} />}>
      알림
    </Header>
  );
  return (
    <Layout header={HeaderContainer}>
      <Box padding="0 20px">
        <List gap="30px" height="calc(100dvh - 20px)" hideScrollbar>
          {Array.from({ length: 10 }).map((_, index) => (
            <Card key={index} />
          ))}
        </List>
      </Box>
    </Layout>
  );
};

export { Notifications };
