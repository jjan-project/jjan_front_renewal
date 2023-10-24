import * as S from "./PartyCard.styles";

import { Avatar } from "@/components/avatar";
import { Box } from "@/components/box";
import { Flex } from "@/components/flex";
import { Spacing } from "@/components/spacing";
import { Typo } from "@/components/typo";

const CardContributorsAvatarSkeleton = () => (
  <S.AvatarContainer>
    {Array(4)
      .fill(0)
      .map((_, index) => (
        <S.AvatarPositioner key={index} index={index}>
          <Avatar isLoading isCircle width="39px" height="39px" />
        </S.AvatarPositioner>
      ))}
  </S.AvatarContainer>
);

const CardInfoSkeleton = () => (
  <Box width="100%">
    <Flex flexDirection="column">
      <Typo isLoading appearance="body2" width="80%" />
      <Typo isLoading appearance="body3" width="60%" />
      <Spacing direction="vertical" size="20px" />
      <CardContributorsAvatarSkeleton />
    </Flex>
  </Box>
);

const CardImageSkeleton = () => (
  <Box width="110px" height="110px">
    <Avatar isLoading width="110px" height="110px" />
  </Box>
);

const PartyCardSkeleton = () => {
  return (
    <Flex gap="18px">
      <CardImageSkeleton />
      <CardInfoSkeleton />
    </Flex>
  );
};

export { PartyCardSkeleton };
