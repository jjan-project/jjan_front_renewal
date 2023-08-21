import * as S from "./PartyCard.styles";
import { OverlayedAvatarProps } from "./types";

import { Avatar } from "@/components/avatar";
import { Box } from "@/components/box";
import { Flex } from "@/components/flex";
import { Spacing } from "@/components/spacing";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";

const OverlayedAvatar = ({ overlay, ...avatarProps }: OverlayedAvatarProps) => {
  return (
    <S.OverlayContainer>
      <Avatar {...avatarProps} style={{ borderRadius: "50%" }} />
      {overlay && <S.OverlayText>{overlay}</S.OverlayText>}
    </S.OverlayContainer>
  );
};

const CardContributorsAvatar = ({ avatars }: { avatars: string[] }) => {
  return (
    <S.AvatarContainer>
      {avatars.slice(0, 4).map((avatarSrc, index) => (
        <S.AvatarPositioner key={index} index={index}>
          <OverlayedAvatar
            src={avatarSrc}
            width="39px"
            height="39px"
            overlay={
              index === 3 && avatars.length > 4
                ? `+${avatars.length - 3}`
                : undefined
            }
          />
        </S.AvatarPositioner>
      ))}
    </S.AvatarContainer>
  );
};

const CardInfo = ({
  contributorsAvatars,
}: {
  contributorsAvatars: string[];
}) => {
  return (
    <Stack>
      <Flex flexDirection="column">
        <Typo
          appearance="body2"
          color="violet100"
          style={{ fontWeight: "bold" }}
        >
          회기 꽃술 6인팟!!
        </Typo>
        <Typo appearance="body3" color="gray700" style={{ fontWeight: "bold" }}>
          2023/6/29
        </Typo>
        <Spacing direction="vertical" size="20px" />
        <CardContributorsAvatar avatars={contributorsAvatars} />
      </Flex>
    </Stack>
  );
};

const CardImage = ({ partyImage }: { partyImage: string }) => {
  return (
    <Box width="110px" height="110px" style={{ position: "relative" }}>
      <img src={partyImage} width="110px" height="110px" />
      <Box
        width="41px"
        height="18px"
        backgroundColor="green175"
        style={{
          position: "absolute",
          top: "0",
        }}
      />
    </Box>
  );
};

const PartyCard = ({
  partyImage,
  contributorsAvatars,
}: {
  partyImage: string;
  contributorsAvatars: string[];
}) => {
  return (
    <Flex gap="18px">
      <CardImage partyImage={partyImage} />
      <CardInfo contributorsAvatars={contributorsAvatars} />
    </Flex>
  );
};

export { PartyCard };
