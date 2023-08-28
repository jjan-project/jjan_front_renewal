import { userRoutes } from "@/routes";

import { JJAN_URL } from "./domain";
import { AuthResponseData } from "./types";

import { httpService } from "@/module/http";
import { serverStateManager } from "@/module/serverState";

export const useUpdateAvatar = () =>
  serverStateManager.update({
    url: `${JJAN_URL}${userRoutes.updateAvatar}`,
    params: {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  });

export const useUpdateNickName = () =>
  serverStateManager.update({ url: `${JJAN_URL}${userRoutes.updateNickName}` });

export const useUpdateDrinkCapacity = () =>
  serverStateManager.update({
    url: `${JJAN_URL}${userRoutes.updateDrinkCapacity}`,
  });

export const useDeleteUserAT = () =>
  serverStateManager.delete({ url: `${JJAN_URL}${userRoutes.deleteUserAT}` });

export const useDeleteUserUserEmail = (userEmail: string) =>
  serverStateManager.delete({
    url: `${JJAN_URL}${userRoutes.deleteUserUserEmail}`,
    params: {
      params: {
        userEmail,
      },
    },
  });

export const fetchUserInfo = () =>
  httpService.get<AuthResponseData>(`${JJAN_URL}${userRoutes.userInfo}`, {
    withCredentials: true,
  });
