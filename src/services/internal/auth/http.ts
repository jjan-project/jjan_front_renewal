import { userRoutes } from "@/router";

import { JJAN_URL } from "../domain";
import { Response } from "../types";

import { httpService } from "@/module/http";

export const isEmailExistedApi = (email: string) =>
  httpService.post<Response<null>>(`${JJAN_URL}${userRoutes.existsEmail}`, {
    data: email,
  });

export const isNicknameExistedApi = (nickname: string) =>
  httpService.post<Response<null>>(`${JJAN_URL}${userRoutes.existsNickname}`, {
    data: nickname,
  });
