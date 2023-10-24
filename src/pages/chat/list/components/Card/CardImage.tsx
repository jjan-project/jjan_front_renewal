import { Avatar } from "@/components/avatar";

const CardImage = ({
  partyImages,
  isLoading,
}: {
  partyImages?: string | null;
  isLoading?: boolean;
}) => {
  const adjustedSrc = partyImages === null ? undefined : partyImages;

  if (isLoading) {
    return <Avatar width="45px" height="45px" isLoading isCircle />;
  }
  return <Avatar width="45px" height="45px" isCircle src={adjustedSrc} />;
};

export { CardImage };
