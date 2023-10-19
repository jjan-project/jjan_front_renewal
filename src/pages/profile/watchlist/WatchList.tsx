import { IconCancel, IconChevronLeftLarge } from "jjan-icon";
import { useNavigate } from "react-router-dom";

import { Box } from "@/components/box";
import { Header } from "@/components/header";
import { Hr } from "@/components/hr";
import { Layout } from "@/components/layout";
import { List } from "@/components/list";
import { Spacing } from "@/components/spacing";
import { Typo } from "@/components/typo";
import usePartyCardRenderer from "@/hooks/usePartyCardRenderer";
import { useFetchJoinedParty } from "@/services/internal/party/query";

const HeaderContainer = () => {
  const navigate = useNavigate();

  return (
    <Header
      leftIcon={<IconChevronLeftLarge onClick={() => navigate(-1)} />}
      rightIcon={
        <IconCancel onClick={() => navigate("/profile", { replace: true })} />
      }
    >
      동네 인증
    </Header>
  );
};

const WatchList = () => {
  const { data: joinedPartyResponse, isLoading } = useFetchJoinedParty();

  const renderPartyList = usePartyCardRenderer();

  return (
    <Layout header={<HeaderContainer />}>
      <Box padding="0 20px">
        <Typo appearance="header2">내가 저장한 모임들이에요!</Typo>
        <Spacing direction="vertical" size="78px" />
        <Hr type="solid" backgroundColor="violet100" />
        <Spacing direction="vertical" size="36px" />
        <List gap="30px" height="calc(100dvh - 68px - 221px)" hideScrollbar>
          {renderPartyList(isLoading, joinedPartyResponse?.data)}
        </List>
      </Box>
    </Layout>
  );
};

export { WatchList };
