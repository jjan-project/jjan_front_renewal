import { MENU_HEIGHT } from "../../constants";

import { Box } from "@/components/box";
import { Typo } from "@/components/typo";

const RoomModifyMenu = ({ onClick }: { onClick: () => void }) => {
  return (
    <Box
      centerContent
      backgroundColor="violet100"
      height={`${MENU_HEIGHT}px`}
      onClick={onClick}
    >
      <Typo appearance="header2" color="white" style={{ fontWeight: "bold" }}>
        채팅방 나가기
      </Typo>
    </Box>
  );
};

export { RoomModifyMenu };
