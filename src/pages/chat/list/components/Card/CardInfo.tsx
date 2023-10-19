import { Box } from "@/components/box";
import { Stack } from "@/components/stack/Stack";
import { Typo } from "@/components/typo";

const CardInfo = ({
  partyTitle,
  lastChat,
  isLoading,
}: {
  partyTitle?: string;
  lastChat?: string | null;
  isLoading?: boolean;
}) => {
  if (isLoading) {
    return (
      <Box width="100%">
        <Typo isLoading appearance="body2" width="80%" />
        <Typo isLoading appearance="body3" width="60%" />
      </Box>
    );
  }

  return (
    <Stack>
      <Stack>
        <Typo appearance="body2" color="black" style={{ fontWeight: "bold" }}>
          {partyTitle}
        </Typo>
        <Typo
          appearance="body3"
          color="black"
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {lastChat}
        </Typo>
      </Stack>
    </Stack>
  );
};

export { CardInfo };
