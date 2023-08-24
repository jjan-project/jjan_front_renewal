export const kakaoRoutes = {
  searchKeyword: "https://dapi.kakao.com/v2/local/search/keyword.json",
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
};
