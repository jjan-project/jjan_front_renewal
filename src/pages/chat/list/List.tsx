import { IconChevronLeftLarge, IconMenu } from "jjan-icon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { RoomListCard, RoomModifyMenu } from "./components";
import { HEADER_BOTTOM_HEIGHT, MENU_HEIGHT } from "./constants";

import { useFetchAllChat } from "@/api/jjan/chatController";
import { outParty } from "@/api/jjan/partyController";
import { BottomNav } from "@/components/bottomNav";
import { Box } from "@/components/box";
import { Header } from "@/components/header";
import { Layout } from "@/components/layout";
import { List as ContentList } from "@/components/list";
import { NAV_ITEMS } from "@/pages/home/constants";

const List = () => {
  const navigate = useNavigate();

  const [checkedIds, setCheckedIds] = useState<number[]>([]);
  const [showMenu, setShowMenu] = useState(false);

  const handleCheckChange = (id: number, isChecked: boolean) => {
    if (isChecked) {
      setCheckedIds(prev => [...prev, id]);
      return;
    }
    setCheckedIds(prev => prev.filter(item => item !== id));
  };

  const { data: myChatRoomAllList, refetch: refetchMyChatRoomAllList } =
    useFetchAllChat();

  const handleExitChatRoom = () => {
    if (checkedIds) {
      checkedIds.forEach(async id => {
        try {
          await outParty(String(id));
          setCheckedIds([]);
          setShowMenu(false);
          refetchMyChatRoomAllList();
        } catch (e) {
          console.error(e);
        }
      });
    }
  };

  return (
    <Layout
      header={
        <Header
          leftIcon={<IconChevronLeftLarge onClick={() => navigate(-1)} />}
          rightIcon={<IconMenu onClick={() => setShowMenu(!showMenu)} />}
        >
          탐색하기
        </Header>
      }
      footer={<BottomNav items={NAV_ITEMS} />}
      paddingFooter={false}
    >
      <Box padding="0 20px">
        <ContentList
          gap="30px"
          height={
            showMenu
              ? `calc(100dvh - ${HEADER_BOTTOM_HEIGHT + MENU_HEIGHT}px)`
              : `calc(100dvh - ${HEADER_BOTTOM_HEIGHT}px)`
          }
        >
          {myChatRoomAllList &&
            myChatRoomAllList.map((roomData, index) => (
              <RoomListCard
                key={index}
                showMenu={showMenu}
                roomData={roomData}
                onCheckChange={handleCheckChange}
              />
            ))}
        </ContentList>
      </Box>
      {showMenu && <RoomModifyMenu onClick={handleExitChatRoom} />}
    </Layout>
  );
};

export { List };
