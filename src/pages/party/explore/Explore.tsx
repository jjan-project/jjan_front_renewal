import { IconChevronLeftLarge, IconMenu } from "jjan-icon";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { NAV_ITEMS } from "../constants";

import { useFetchAllParty, fetchMyParty } from "@/api/jjan/partyController";
import { PartyInfo } from "@/api/jjan/types";
import { BottomNav } from "@/components/bottomNav";
import { Box } from "@/components/box";
import { Header } from "@/components/header";
import { List } from "@/components/list";
import { Spacing } from "@/components/spacing";
import { Stack } from "@/components/stack";
import { Tabs } from "@/components/tabs";
import { Typo } from "@/components/typo";
import { PartyCard } from "@/pages/components";
import { Layout } from "@/pages/components/layout";
import { calculateDday } from "@/utils/calculateDday";

const NAME = {
  FIRST: "짠 모임",
  SECOND: "나의 모임",
};

const Explore = () => {
  const [myPartyList, setMyPartyList] = useState<PartyInfo[]>();
  const navigate = useNavigate();

  const response = useFetchAllParty();

  let partyList: PartyInfo[] | undefined;

  if (response?.data) {
    partyList = response.data.data;
  }

  const onFetch = async () => {
    try {
      const { data } = await fetchMyParty();
      setMyPartyList(data);
    } catch (error) {
      console.error("Error while verifying JWT Token", error);
    }
  };

  useEffect(() => {
    onFetch();
  }, []);

  const handleDday = (date: string) => {
    const [day] = date.split(" ");

    return calculateDday(day);
  };

  const HeaderContainer = (
    <Header
      leftIcon={<IconChevronLeftLarge onClick={() => navigate(-1)} />}
      rightIcon={<IconMenu onClick={() => navigate("/party-filter")} />}
    >
      탐색하기
    </Header>
  );

  return (
    <Layout header={HeaderContainer} bottom={<BottomNav items={NAV_ITEMS} />}>
      <Box padding="0 20px">
        <Stack>
          <Typo appearance="header2" style={{ fontWeight: "bold" }}>
            오늘은 무슨 모임이 있을까요?
          </Typo>
          <Typo appearance="body2" color="gray700">
            필터를 이용해 원하는 술자리를 고를 수 있어요.
          </Typo>
          <Spacing direction="vertical" size="25px" />

          <Tabs defaultName={NAME.FIRST}>
            <Tabs.List>
              <Tabs.Tab name={NAME.FIRST}>{NAME.FIRST}</Tabs.Tab>
              <Tabs.Tab name={NAME.SECOND}>{NAME.SECOND}</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel name={NAME.FIRST}>
              <List gap="30px" height="calc(100dvh - 68px - 221px)">
                {partyList &&
                  partyList.map(partyInfo => (
                    <PartyCard
                      key={partyInfo.id}
                      title={partyInfo.title}
                      date={partyInfo.partyDate}
                      partyImage={partyInfo.thumbnail}
                      dDay={handleDday(partyInfo.partyDate)}
                      contributorsAvatars={partyInfo.joinUser.map(
                        user => user.profile,
                      )}
                    />
                  ))}
              </List>
            </Tabs.Panel>
            <Tabs.Panel name={NAME.SECOND}>
              <List gap="30px" height="calc(100dvh - 68px - 221px)">
                {myPartyList &&
                  myPartyList.map(partyInfo => (
                    <PartyCard
                      key={partyInfo.id}
                      title={partyInfo.title}
                      date={partyInfo.partyDate}
                      partyImage={partyInfo.thumbnail}
                      dDay={handleDday(partyInfo.partyDate)}
                      contributorsAvatars={partyInfo.joinUser.map(
                        user => user.profile,
                      )}
                    />
                  ))}
              </List>
            </Tabs.Panel>
          </Tabs>
        </Stack>
      </Box>
    </Layout>
  );
};

export { Explore };
