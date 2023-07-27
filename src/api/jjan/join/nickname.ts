import { JJAN_URL } from "../domain";

import { Response } from "@/api/types";
import { httpService } from "@/module/http";

const EXIST = 1;

export const isNicknameExisted = async (email: string) => {
  const res = await httpService.post<Response<null>>(
    `${JJAN_URL}/api/user/unique-nickname`,
    {
      data: email,
    },
  );

  return res.code === EXIST ? true : false;
};

export const getRendomNickname = async () => {
  const res = await httpService.get<Response<null>>(
    `${JJAN_URL}/api/user/random-nickname`,
  );

  return res.data;
};
