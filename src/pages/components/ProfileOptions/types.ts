type ProfileOption = {
  group: string;
  terms: { name: string; link: string }[];
};

type ProfileOptionPanelProps = {
  options: ProfileOption[];
};

export type { ProfileOptionPanelProps, ProfileOption };
