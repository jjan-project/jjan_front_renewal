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

type PartyLocation = {
  address: string;
  latitude: string;
  longitude: string;
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

export type PartyDetailInfo = {
  id: number;
  joinUser: PartyJoinUser[];
  location: PartyLocation;
  content: string;
  female: number;
  male: number;
  maxPartyNum: number;
  partyDate: string;
  partyImages: string[];
  partyTags: string[];
  title: string;
};

export type CreatePartyResponseData = {
  id: string;
  author: string;
  authorEmail: string;
  title: string;
  content: string;
  maxPartyNum: string;
  location: PartyLocation;
  partyDate: string;
  partyTags: string[];
  partyImages: string[];
};

export type UpdatePartyResponseDate = {
  title: string;
  content: string;
  maxPartyNum: string;
  location: PartyLocation;
  partyDate: string;
  partyTags: string[];
  partyImages: string[];
};

export type FilterPartyRequestData = {
  sort: string | null;
  partyTagList?: string[] | null;
  radiusRange?: string | null;
  personnelGoe?: string | null;
  personnelLoe?: string | null;
  ageTag?: string[] | null;
};
