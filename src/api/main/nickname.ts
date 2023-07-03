import { Response } from "../types";

import { MAIN_URL } from "./constants";

import { httpService } from "@/module/http";

type UniqueNickname = {
  target: string;
  item: string;
};

async function isNicknameExists(email: string): Promise<boolean> {
  const result = await httpService.post<Response<UniqueNickname>, string>(
    `${MAIN_URL}/user/unique-nickname`,
    email,
  );

  if (result.message === "OK") return true;
  return false;
}

export { isNicknameExists };
