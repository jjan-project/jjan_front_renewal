import { IconChevronLeftLarge, IconMenu } from "jjan-icon";
import { useNavigate } from "react-router-dom";

import { usePartyFilterData, usePartyFilterParams } from "./hooks";

import { BottomNav } from "@/components/bottomNav";
import { Box } from "@/components/box";
import { Header } from "@/components/header";
import { Layout } from "@/components/layout";
import { List } from "@/components/list";
import { Stack } from "@/components/stack";
import { Tabs } from "@/components/tabs";
import { Typo } from "@/components/typo";
import { NAV_ITEMS } from "@/constants/navigation";
import usePartyCardRenderer from "@/hooks/usePartyCardRenderer";
import { CreatePartyFabButton } from "@/pages/components";
import {
  useFetchAllParty,
  useFetchJoinedParty,
} from "@/services/internal/party/query";

const NAME = {
  FIRST: "짠 모임",
  SECOND: "나의 모임",
};

const Explore = () => {
  const navigate = useNavigate();

  const { data: allPartyResponse, isLoading: isLoadingAllParty } =
    useFetchAllParty();

  const { data: joinedPartyResponse, isLoading: isLoadingJoinedParty } =
    useFetchJoinedParty();

  const {
    sort,
    partyTagList,
    radiusRange,
    personnelGoe,
    personnelLoe,
    ageTag,
  } = usePartyFilterParams();

  const {
    filteredPartyList,
    isFilteredPage,
    isLoading: isLoadingFilteredParty,
  } = usePartyFilterData({
    sort,
    partyTagList,
    radiusRange,
    personnelGoe,
    personnelLoe,
    ageTag,
  });

  const partyListToDisplay = filteredPartyList?.length
    ? filteredPartyList
    : allPartyResponse && allPartyResponse.data;

  const isLoadingParty =
    (isFilteredPage && isLoadingFilteredParty) ||
    (!isFilteredPage && isLoadingAllParty);

  const renderPartyList = usePartyCardRenderer();

  return (
    <Layout
      header={
        <Header
          leftIcon={<IconChevronLeftLarge onClick={() => navigate(-1)} />}
          rightIcon={<IconMenu onClick={() => navigate("/party-filter")} />}
        >
          탐색하기
        </Header>
      }
      footer={<BottomNav items={NAV_ITEMS} />}
      paddingFooter={false}
    >
      <Box padding="0 20px" style={{ position: "relative" }}>
        <Stack>
          <CreatePartyFabButton />
          <Typo appearance="header2" style={{ fontWeight: "bold" }}>
            오늘은 무슨 모임이 있을까요?
          </Typo>
          <Typo appearance="body2" color="gray700">
            필터를 이용해 원하는 술자리를 고를 수 있어요.
          </Typo>

          <Tabs defaultName={NAME.FIRST}>
            <Tabs.List>
              <Tabs.Tab name={NAME.FIRST}>{NAME.FIRST}</Tabs.Tab>
              <Tabs.Tab name={NAME.SECOND}>{NAME.SECOND}</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel name={NAME.FIRST}>
              <List
                gap="30px"
                height="calc(100dvh - 68px - 198px)"
                hideScrollbar
              >
                {renderPartyList(isLoadingParty, partyListToDisplay)}
              </List>
            </Tabs.Panel>
            <Tabs.Panel name={NAME.SECOND}>
              <List
                gap="30px"
                height="calc(100dvh - 68px - 198px)"
                hideScrollbar
              >
                {renderPartyList(
                  isLoadingJoinedParty,
                  joinedPartyResponse?.data,
                )}
              </List>
            </Tabs.Panel>
          </Tabs>
        </Stack>
      </Box>
    </Layout>
  );
};

export { Explore };
