export type AuthResponseData = {
  email: string;
  nickName: string;
  profile?: string;
  address: string;
  gender: string;
  birth: string;
  drinkCapacity: string;
};

export type SigninData = {
  email: string;
  password: string;
};

type PartyJoinUser = {
  id: number;
  profile: string | "blank";
};

export type PartyInfo = {
  id: number;
  joinUser: PartyJoinUser[];
  partyDate: string;
  thumbnail: string;
  title: string;
};
