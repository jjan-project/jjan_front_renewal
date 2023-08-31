import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";

const LocationItem = ({
  place,
  address,
}: {
  place: string;
  address: string;
}) => {
  return (
    <Stack>
      <Typo appearance="body1">{place}</Typo>
      <Typo appearance="body2" color="gray700">
        {address}
      </Typo>
    </Stack>
  );
};

export { LocationItem };
