import { useMutation } from "@tanstack/react-query";

import { userRoutes } from "@/routes";

import { JJAN_URL } from "@/api/jjan/domain";
import { Response } from "@/api/types";
import { httpService } from "@/module/http";
import { ErrorType } from "@/module/serverState/type/httpTypes";

// api

function updateUserAvatar(avatar: FormData) {
  return httpService.patch<Response<null>>(
    `${JJAN_URL}${userRoutes.updateAvatar}`,
    avatar,
    {
      withCredentials: true,
    },
  );
}

function updateUserNickname(nickname: string) {
  return httpService.patch<Response<null>>(
    `${JJAN_URL}${userRoutes.updateNickName}`,
    {
      data: nickname,
    },
    {
      withCredentials: true,
    },
  );
}

function updateUserDrinkCapacity(drinkCapacity: string) {
  return httpService.patch<Response<null>>(
    `${JJAN_URL}${userRoutes.updateDrinkCapacity}`,
    {
      data: drinkCapacity,
    },
    {
      withCredentials: true,
    },
  );
}

// query

export const useUpdateAvatar = () => {
  return useMutation<Response<null>, ErrorType, FormData>({
    mutationFn: updateUserAvatar,
    useErrorBoundary: true,
  });
};

export const useUpdateNickname = () => {
  return useMutation<Response<null>, ErrorType, string>({
    mutationFn: updateUserNickname,
    useErrorBoundary: true,
  });
};

export const useUpdateDrinkCapacity = () => {
  return useMutation<Response<null>, ErrorType, string>({
    mutationFn: updateUserDrinkCapacity,
    useErrorBoundary: true,
  });
};
