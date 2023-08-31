import { IconCancel, IconChevronLeftLarge } from "jjan-icon";

import glassesImg from "@/assets/glasses.png";
import { Box } from "@/components/box";
import { Header } from "@/components/header";
import { Hr } from "@/components/hr";
import { List } from "@/components/list";
import { Spacing } from "@/components/spacing";
import { Typo } from "@/components/typo";
import { PartyCard } from "@/pages/components";
import { Layout } from "@/pages/components/layout";

const HeaderContainer = (
  <Header leftIcon={<IconChevronLeftLarge />} rightIcon={<IconCancel />}>
    관심목록
  </Header>
);

const WatchList = () => {
  return (
    <Layout header={HeaderContainer}>
      <Box padding="0 20px">
        <Typo appearance="header2">내가 저장한 모임들이에요!</Typo>
        <Spacing direction="vertical" size="78px" />
        <Hr type="solid" backgroundColor="violet100" />
        <Spacing direction="vertical" size="36px" />
        <List gap="30px" height="calc(100dvh - 68px - 221px)">
          {Array.from({ length: 2 }).map((_, index) => (
            <PartyCard
              key={index}
              partyImage={glassesImg}
              contributorsAvatars={[glassesImg, glassesImg]}
            />
          ))}
        </List>
      </Box>
    </Layout>
  );
};

export { WatchList };
