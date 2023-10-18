import { IconChevronLeftLarge, IconMenu } from "jjan-icon";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import { NAV_ITEMS } from "../constants";

import { usePartyFilterData } from "./hooks";

import { BottomNav } from "@/components/bottomNav";
import { Box } from "@/components/box";
import { Header } from "@/components/header";
import { Layout } from "@/components/layout";
import { List } from "@/components/list";
import { Stack } from "@/components/stack";
import { Tabs } from "@/components/tabs";
import { Typo } from "@/components/typo";
import { PartyCard } from "@/pages/components";
import {
  useFetchAllParty,
  useFetchJoinedParty,
} from "@/services/internal/party/query";
import { calculateDday } from "@/utils/calculateDday";

const NAME = {
  FIRST: "짠 모임",
  SECOND: "나의 모임",
};

const Explore = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const sort = searchParams.get("sort");
  const partyTagListParam = searchParams.get("partyTagList");
  const partyTagList =
    partyTagListParam !== null ? JSON.parse(partyTagListParam) : undefined;
  const radiusRange = searchParams.get("radiusRange");
  const personnelGoe = searchParams.get("personnelGoe");
  const personnelLoe = searchParams.get("personnelLoe");
  const ageTagParam = searchParams.get("ageTag");
  const ageTag = ageTagParam !== null ? JSON.parse(ageTagParam) : undefined;

  const filteredPartyList = usePartyFilterData({
    sort,
    partyTagList,
    radiusRange,
    personnelGoe,
    personnelLoe,
    ageTag,
  });
  const { data: allPartyResponse } = useFetchAllParty();
  const { data: joinedPartyResponse } = useFetchJoinedParty();

  const partyListToDisplay = filteredPartyList?.length
    ? filteredPartyList
    : allPartyResponse && allPartyResponse.data;

  const handleDday = (date: string) => {
    const [day] = date.split(" ");
    return calculateDday(day);
  };

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
      <Box padding="0 20px">
        <Stack>
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
              <List gap="30px" height="calc(100dvh - 68px - 198px)" hideScrollbar>
                {partyListToDisplay
                  ? partyListToDisplay.map(partyInfo => (
                      <Link
                        to={`/party-detail/${partyInfo.id}`}
                        key={partyInfo.id}
                      >
                        <PartyCard
                          title={partyInfo.title}
                          date={partyInfo.partyDate}
                          partyImage={partyInfo.thumbnail}
                          dDay={handleDday(partyInfo.partyDate)}
                          contributorsAvatars={partyInfo.joinUser.map(
                            user => user.profile,
                          )}
                        />
                      </Link>
                    ))
                  : "모임을 찾을 수 없습니다."}
              </List>
            </Tabs.Panel>
            <Tabs.Panel name={NAME.SECOND}>
              <List gap="30px" hideScrollbar>
                {joinedPartyList
                  ? joinedPartyList.map(partyInfo => (
                      <Link
                        to={`/party-detail/${partyInfo.id}`}
                        key={partyInfo.id}
                      >
                        <PartyCard
                          title={partyInfo.title}
                          date={partyInfo.partyDate}
                          partyImage={partyInfo.thumbnail}
                          dDay={handleDday(partyInfo.partyDate)}
                          contributorsAvatars={partyInfo.joinUser.map(
                            user => user.profile,
                          )}
                        />
                      </Link>
                    ))
                  : "나의 모임을 찾을 수 없습니다."}
              </List>
            </Tabs.Panel>
          </Tabs>
        </Stack>
      </Box>
    </Layout>
  );
};

export { Explore };
