import * as S from "./PartyCard.styles";
import { OverlayedAvatarProps, PartyCardProps } from "./types";

import { Avatar } from "@/components/avatar";
import { Box } from "@/components/box";
import { Flex } from "@/components/flex";
import { Spacing } from "@/components/spacing";
import { Typo } from "@/components/typo";

const OverlayedAvatar = ({ overlay, ...avatarProps }: OverlayedAvatarProps) => {
  return (
    <S.OverlayContainer>
      {avatarProps.src === "blank" ? (
        <Box
          width="39px"
          height="39px"
          backgroundColor="gray800"
          borderRadius="50%"
          overflow="hidden"
        />
      ) : (
        <Avatar {...avatarProps} style={{ borderRadius: "50%" }} />
      )}

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
  title,
  date,
  contributorsAvatars,
}: Pick<PartyCardProps, "title" | "date" | "contributorsAvatars">) => {
  return (
    <Box width="100%">
      <Flex flexDirection="column">
        <Typo
          appearance="body2"
          color="violet100"
          style={{ fontWeight: "bold" }}
        >
          {title}
        </Typo>
        <Typo appearance="body3" color="gray700" style={{ fontWeight: "bold" }}>
          {date}
        </Typo>
        <Spacing direction="vertical" size="20px" />
        <CardContributorsAvatar avatars={contributorsAvatars} />
      </Flex>
    </Box>
  );
};

const CardImage = ({
  partyImage,
  dDay,
}: Pick<PartyCardProps, "partyImage" | "dDay">) => {
  return (
    <Box width="110px" height="110px" style={{ position: "relative" }}>
      <Avatar width="110px" height="110px" src={partyImage} />
      <Box
        width="41px"
        height="18px"
        backgroundColor={dDay > -1 ? "green175" : "orange300"}
        style={{
          position: "absolute",
          top: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typo appearance="info1" color={dDay > -1 ? "black" : "white"}>
          {dDay > -1 ? `D-${dDay}` : "DONE"}
        </Typo>
      </Box>
    </Box>
  );
};

const PartyCard = ({
  partyImage,
  title,
  date,
  dDay,
  contributorsAvatars,
}: PartyCardProps) => {
  return (
    <Flex gap="18px">
      <CardImage dDay={dDay} partyImage={partyImage} />
      <CardInfo
        title={title}
        date={date}
        contributorsAvatars={contributorsAvatars}
      />
    </Flex>
  );
};

export { PartyCard };
