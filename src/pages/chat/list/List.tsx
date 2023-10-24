import { IconChevronLeftLarge, IconMenu } from "jjan-icon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  RoomListCard,
  RoomModifyMenu,
  RoomListCardSkeleton,
} from "./components";
import { HEADER_BOTTOM_HEIGHT, MENU_HEIGHT } from "./constants";

import { BottomNav } from "@/components/bottomNav";
import { Box } from "@/components/box";
import { Header } from "@/components/header";
import { Layout } from "@/components/layout";
import { List as ContentList } from "@/components/list";
import { NAV_ITEMS } from "@/constants/navigation";
import { useFetchAllChat } from "@/services/internal/chat/query";
import { exitParty } from "@/services/internal/party/http";

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

  const {
    data: myChatRoomAllList,
    refetch: refetchMyChatRoomAllList,
    isLoading,
  } = useFetchAllChat();

  const handleExitChatRoom = () => {
    if (checkedIds) {
      checkedIds.forEach(async id => {
        try {
          await exitParty(String(id));
          setCheckedIds([]);
          setShowMenu(false);
          refetchMyChatRoomAllList();
        } catch (e) {
          console.error(e);
        }
      });
    }
  };

  const renderRoomListCardSkeletons = () =>
    Array(5)
      .fill(null)
      .map((_, index) => <RoomListCardSkeleton key={index} />);

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
          {isLoading
            ? renderRoomListCardSkeletons()
            : myChatRoomAllList &&
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
