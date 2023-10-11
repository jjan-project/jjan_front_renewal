export const kakaoRoutes = {
  searchKeyword: "https://dapi.kakao.com/v2/local/search/keyword.json",
  addressFromLatLng: `https://dapi.kakao.com/v2/local/geo/coord2address.json`,
};

export const userRoutes = {
  signin: "/api/user/login",
  signup: "/api/user/join",

  existsEmail: "/api/user/unique-email",
  existsNickname: "/api/user/unique-nickname",

  updateAvatar: "/api/user/profile-image",
  updateNickName: "/api/user/nickname",
  updateDrinkCapacity: "/api/user/drink-capacity",

  deleteUserAT: "/api/user",
  deleteUserUserEmail: "/api/user/:userEmail",

  randomNickname: "/api/user/random-nickname",

  userInfo: "/api/user/info",
};

export const partyRoutes = {
  getAllParty: "/api/party",
  getMyParty: "/api/party/my",
  getParty: "/api/party/:partyId",
  getFilterParty: "/api/party/search",

  createParty: "/api/party",

  updateParty: "/api/party/:partyId",

  deleteParty: "/api/party/:partyId",

  joinParty: "/api/party/:partyId/join",

  exitParty: "/api/party/:partyId/exit",
};

export const chatRoutes = {
  getChatAllRoom: "/api/chat/participants",
  getChatMessages: "/api/chat/:chatId",
};
