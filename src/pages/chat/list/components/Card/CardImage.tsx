import { Avatar } from "@/components/avatar";

const CardImage = ({ partyImages }: { partyImages: string | null }) => {
  const adjustedSrc = partyImages === null ? undefined : partyImages;
  return <Avatar width="45px" height="45px" isCircle src={adjustedSrc} />;
};

export { CardImage };
