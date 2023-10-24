import { userRoutes } from "@/router";

import { JJAN_URL } from "../domain";
import { AuthResponseData } from "../types";

import { serverStateManager } from "@/module/serverState";

export const useUpdateAvatar = () =>
  serverStateManager.update({
    url: `${JJAN_URL}${userRoutes.updateAvatar}`,
    params: {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
    config: {
      useErrorBoundary: true,
    },
  });

export const useUpdateNickname = () =>
  serverStateManager.update({
    url: `${JJAN_URL}${userRoutes.updateNickName}`,
    params: {
      headers: {
        "Content-Type": "application/json",
      },
    },
    config: {
      useErrorBoundary: true,
    },
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

export const useFetchUserInfo = () =>
  serverStateManager.fetch<AuthResponseData>({
    url: `${JJAN_URL}${userRoutes.userInfo}`,
  });
