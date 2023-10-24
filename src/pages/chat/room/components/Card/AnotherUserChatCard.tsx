import { CardProps } from "./types";

import { Avatar } from "@/components/avatar";
import { Box } from "@/components/box";
import { Flex } from "@/components/flex";
import { Typo } from "@/components/typo";
import { formatToKoreanTime } from "@/utils/date";

const AnotherUserChatCard = ({ index, data }: CardProps) => {
  return (
    <Box
      key={index}
      style={{ alignSelf: "flex-start", display: "inline-block" }}
    >
      <Flex gap="10px">
        <Avatar
          width="40px"
          height="40px"
          src={data.senderImage}
          isCircle={true}
        />
        <Box>
          <Typo
            appearance="body1"
            style={{ textAlign: "right", marginTop: "5px" }}
          >
            {data.sender}
          </Typo>
          <Box
            backgroundColor="violet400"
            padding="5px 10px"
            borderRadius="8px"
          >
            <Typo appearance="body1" color="white">
              {data.message}
            </Typo>
          </Box>
          <Typo
            appearance="body3"
            style={{ textAlign: "right", marginTop: "5px" }}
          >
            {formatToKoreanTime(data.sendTime)}
          </Typo>
        </Box>
      </Flex>
    </Box>
  );
};

export { AnotherUserChatCard };
