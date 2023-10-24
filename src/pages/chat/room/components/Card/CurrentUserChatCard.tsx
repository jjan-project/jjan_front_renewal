import { CardProps } from "./types";

import { Box } from "@/components/box";
import { Typo } from "@/components/typo";
import { formatToKoreanTime } from "@/utils/date";

const CurrentUserChatCard = ({ index, data }: CardProps) => {
  return (
    <Box key={index} style={{ alignSelf: "flex-end", display: "inline-block" }}>
      <Box backgroundColor="green175" padding="5px 10px" borderRadius="8px">
        <Typo appearance="body1">{data.message}</Typo>
      </Box>
      <Typo appearance="body3" style={{ textAlign: "right", marginTop: "5px" }}>
        {formatToKoreanTime(data.sendTime)}
      </Typo>
    </Box>
  );
};

export { CurrentUserChatCard };
