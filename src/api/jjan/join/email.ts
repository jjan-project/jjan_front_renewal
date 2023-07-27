import { JJAN_URL } from "../domain";

import { Response } from "@/api/types";
import { httpService } from "@/module/http";

const EXIST = 1;

export const isEmailExisted = async (email: string) => {
  const res = await httpService.post<Response<null>>(
    `${JJAN_URL}/api/user/random-nickname`,
    {
      data: email,
    },
  );

  return res.code === EXIST ? true : false;
};
