import { IconCancel, IconChevronLeftLarge } from "jjan-icon";
import { Link, useNavigate } from "react-router-dom";

import { fetchJoinedParty } from "@/api/jjan/partyController";
import { PartyInfo } from "@/api/jjan/types";
import { Box } from "@/components/box";
import { Header } from "@/components/header";
import { Hr } from "@/components/hr";
import { List } from "@/components/list";
import { Spacing } from "@/components/spacing";
import { Typo } from "@/components/typo";
import { PartyCard } from "@/pages/components";
import { Layout } from "@/pages/components/layout";
import { calculateDday } from "@/utils/calculateDday";

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
  const joinedPartyResponse = fetchJoinedParty();
  let joinedPartyList: PartyInfo[] | undefined;

  if (joinedPartyResponse?.data) {
    joinedPartyList = joinedPartyResponse.data.data;
  }

  const handleDday = (date: string) => {
    const [day] = date.split(" ");
    return calculateDday(day);
  };

  return (
    <Layout header={<HeaderContainer />}>
      <Box padding="0 20px">
        <Typo appearance="header2">내가 저장한 모임들이에요!</Typo>
        <Spacing direction="vertical" size="78px" />
        <Hr type="solid" backgroundColor="violet100" />
        <Spacing direction="vertical" size="36px" />
        <List gap="30px" height="calc(100dvh - 68px - 221px)">
          {joinedPartyList
            ? joinedPartyList.map(partyInfo => (
                <Link to={`/party-detail/${partyInfo.id}`} key={partyInfo.id}>
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
      </Box>
    </Layout>
  );
};

export { WatchList };
