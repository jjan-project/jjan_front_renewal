import { CardImage } from "./CardImage";
import { CardInfo } from "./CardInfo";

import { Box } from "@/components/box";
import { Flex } from "@/components/flex";

const RoomListCardSkeleton = () => (
  <Box>
    <Flex gap="18px" alignItems="center">
      <Flex.Item flex="0 0 10%">
        <CardImage isLoading />
      </Flex.Item>
      <Flex.Item flex="0 0 80%">
        <CardInfo isLoading />
      </Flex.Item>
    </Flex>
  </Box>
);

export { RoomListCardSkeleton };
