import { IconChevronLeftLarge, IconCancel } from "jjan-icon";
import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  AnotherUserChatCard,
  CurrentUserChatCard,
  BottomChatInputBar,
} from "./components";
import { HEADER_BOTTOM_HEIGHT } from "./constants";
import { useWebSocket } from "./hooks";

import { useFetchChatMessages } from "@/api/jjan/chatController";
import { ChatMessageResponseDate } from "@/api/jjan/types";
import { useFetchUserInfo } from "@/api/jjan/userController";
import { Box } from "@/components/box";
import { Header } from "@/components/header";
import { List } from "@/components/list";
import { Layout } from "@/pages/components/layout";

type MessageListProps = {
  chatMessageList?: ChatMessageResponseDate[];
  currentUser?: string;
};

const MessageList = ({ chatMessageList, currentUser }: MessageListProps) => {
  const bottomRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView();
    }
  }, [chatMessageList]);

  return (
    <List gap="30px" height={`calc(100dvh - ${HEADER_BOTTOM_HEIGHT}px)`}>
      {chatMessageList?.length
        ? chatMessageList?.map((data, index) => {
            const CardComponent =
              data.sender === currentUser
                ? CurrentUserChatCard
                : AnotherUserChatCard;
            return <CardComponent key={index} index={index} data={data} />;
          })
        : ""}
      <div ref={bottomRef}></div>
    </List>
  );
};

const Room = () => {
  const navigate = useNavigate();
  const { chatId } = useParams();

  const { data: chatMessageList, refetch: chatMessageRefetch } =
    useFetchChatMessages(chatId);
  const [ws, socketConnected] = useWebSocket(
    import.meta.env.VITE_JJAN_CHAT_URL,
    chatMessageRefetch,
  );

  if (!Array.isArray(chatMessageList)) chatMessageRefetch();

  const { data: userInfo } = useFetchUserInfo();

  const enterChat = () => {
    if (ws && socketConnected && ws instanceof WebSocket) {
      ws.send(
        JSON.stringify({
          sender: userInfo?.nickName,
          partyId: chatId,
          messageType: "ENTER",
        }),
      );
    }
  };

  useEffect(() => {
    if (userInfo) {
      enterChat();
    }
  }, [userInfo, ws, socketConnected]);

  const HeaderContainer = (
    <Header
      leftIcon={<IconChevronLeftLarge onClick={() => navigate(-1)} />}
      rightIcon={<IconCancel onClick={() => navigate("/party-explore")} />}
    >
      채팅
    </Header>
  );

  return (
    <Layout
      header={HeaderContainer}
      bottom={
        <BottomChatInputBar
          ws={ws}
          chatId={chatId}
          socketConnected={socketConnected}
          userInfo={userInfo}
        />
      }
    >
      <Box padding="0 20px">
        {userInfo?.nickName && (
          <MessageList
            chatMessageList={chatMessageList}
            currentUser={userInfo.nickName}
          />
        )}
      </Box>
    </Layout>
  );
};

export { Room };
