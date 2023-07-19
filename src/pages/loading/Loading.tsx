import SvgLoadingSplash from "@/assets/LoadingSplash.svg";
import { Box } from "@/components/box";
import { LoadingSplash } from "@/components/loadingSplash";
import { Spacing } from "@/components/spacing";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";

const Loading = () => {
  return (
    <Box height="100vh" padding="0 20px" centerContent>
      <Stack>
        <Typo appearance="header2">잠시만 기다려주세요!</Typo>
        <Spacing direction="vertical" size="124px" />
        <LoadingSplash imageUrl={SvgLoadingSplash} />
      </Stack>
    </Box>
  );
};

export { Loading };
