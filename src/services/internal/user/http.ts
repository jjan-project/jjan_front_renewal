import { userRoutes } from "@/router";

import { JJAN_URL } from "../domain";
import { AuthResponseData } from "../types";

import { httpService } from "@/module/http";

// router에서 유저정보를 가져올때는 queryProvider가 없기때문에 http요청을 사용
export const fetchUserInfo = () =>
  httpService.get<AuthResponseData>(`${JJAN_URL}${userRoutes.userInfo}`, {
    withCredentials: true,
  });

// serverStateManager로 요청시 에러가 발생해 임시로 httpService를 사용중
export const updateDrinkCapacity = (data: string) =>
  httpService.patch(
    `${JJAN_URL}${userRoutes.updateDrinkCapacity}`,
    {
      data,
    },
    { withCredentials: true, headers: { "Content-Type": "application/json" } },
  );
