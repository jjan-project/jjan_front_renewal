import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { CardImage } from "./CardImage";
import { CardInfo } from "./CardInfo";

import { Box } from "@/components/box";
import { CheckBox } from "@/components/checkBox";
import { Flex } from "@/components/flex";
import { ChatAllRoomResponseData } from "@/services/internal/types";

const RoomListCard = ({
  showMenu,
  roomData,
  onCheckChange,
}: {
  showMenu: boolean;
  roomData: ChatAllRoomResponseData;
  onCheckChange: (id: number, isChecked: boolean) => void;
}) => {
  const [isCheck, setIsCheck] = useState(false);
  const { chatId, lastChat, partyImages, partyTitle } = roomData;

  const navigate = useNavigate();

  return (
    <Box
      onClick={() => {
        if (!showMenu) navigate(`/chat-room/${chatId}`);
      }}
    >
      <Flex gap="18px" alignItems="center">
        {showMenu && (
          <Flex.Item flex="0 0 10%">
            <CheckBox
              id={String(chatId)}
              isChecked={isCheck}
              onChange={() => {
                setIsCheck(prev => !prev);
                onCheckChange(chatId, !isCheck);
              }}
            />
          </Flex.Item>
        )}
        <Flex.Item flex="0 0 10%">
          <CardImage partyImages={partyImages} />
        </Flex.Item>
        <Flex.Item flex="0 0 80%">
          <CardInfo partyTitle={partyTitle} lastChat={lastChat} />
        </Flex.Item>
      </Flex>
    </Box>
  );
};

export { RoomListCard };
