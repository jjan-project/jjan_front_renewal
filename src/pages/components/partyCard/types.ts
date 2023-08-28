interface OverlayedAvatarProps {
  overlay?: string;
  src: string;
  width: string;
  height: string;
  style?: React.CSSProperties;
}

interface PartyCardProps {
  partyImage: string;
  title: string;
  date: string;
  dDay: number;
  contributorsAvatars: string[];
}

export type { OverlayedAvatarProps, PartyCardProps };
