import { Stack } from "@/components/stack/Stack";
import { Typo } from "@/components/typo";

const CardInfo = ({
  partyTitle,
  lastChat,
}: {
  partyTitle: string;
  lastChat: string | null;
}) => {
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
