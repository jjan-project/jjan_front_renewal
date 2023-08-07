import glassesImg from "@/assets/glasses.png";
import { Avatar } from "@/components/avatar";
import { Box } from "@/components/box";
import { Flex } from "@/components/flex";
import { Spacing } from "@/components/spacing";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";

const OverlayedAvatar = ({ overlay, ...avatarProps }) => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Avatar {...avatarProps} style={{ borderRadius: "50%" }} />
      {overlay && (
        <div
          style={{
            position: "absolute",
            color: "white",
            fontWeight: "bold",
          }}
        >
          {overlay}
        </div>
      )}
    </div>
  );
};

const CardContributorsAvatar = () => {
  return (
    <div style={{ display: "flex", position: "relative" }}>
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: `${index * 25}px`,
            zIndex: 4 - index,
            backgroundColor: index === 3 ? "gray" : "transparent",
            borderRadius: "50%",
          }}
        >
          <OverlayedAvatar
            src={glassesImg}
            width="39px"
            height="39px"
            overlay={index === 3 ? "+2" : undefined}
          />
        </div>
      ))}
    </div>
  );
};

const CardInfo = () => {
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
        <CardContributorsAvatar />
      </Flex>
    </Stack>
  );
};

const CardImage = () => {
  return (
    <Box width="110px" height="110px" style={{ position: "relative" }}>
      <img src={glassesImg} width="110px" height="110px" />
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

const PartyCard = () => {
  return (
    <Flex gap="18px">
      <CardImage />
      <CardInfo />
    </Flex>
  );
};

export { PartyCard };
