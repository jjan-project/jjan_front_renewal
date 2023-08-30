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

export type CreatePartyResponseData = {
  id: string;
  author: string;
  authorEmail: string;
  title: string;
  content: string;
  maxPartyNum: string;
  location: {
    partyLatitude: string;
    partyLongitude: string;
  };
  partyDate: string;
  partyTags: string[];
  partyImages: string[];
};

export type UpdatePartyResponseDate = {
  title: string;
  content: string;
  maxPartyNum: string;
  location: {
    partyLatitude: string;
    partyLongitude: string;
  };
  partyDate: string;
  partyTags: string[];
  partyImages: string[];
};
