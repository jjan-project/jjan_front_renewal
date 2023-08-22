import { useMutation } from "@tanstack/react-query";

import { userRoutes } from "@/routes";

import { JJAN_URL } from "./domain";
import type { AuthResponseData, SigninData } from "./types";

import { Response } from "@/api/types";
import { httpService } from "@/module/http";
import { serverStateManager } from "@/module/serverState";
import { ErrorType } from "@/module/serverState/type/httpTypes";

export const useSigninApi = () =>
  useMutation<Response<AuthResponseData>, ErrorType, SigninData>({
    mutationFn: data =>
      httpService.post(`${JJAN_URL}${userRoutes.signin}`, data, {
        withCredentials: true,
      }),
    useErrorBoundary: true,
  });

export const useSignupApi = () =>
  useMutation<Response<null>, ErrorType, FormData>({
    mutationFn: (formData: FormData) =>
      httpService.post(`${JJAN_URL}${userRoutes.signup}`, formData, {
        withCredentials: true,
      }),
    useErrorBoundary: true,
  });

export const isEmailExistedApi = (email: string) =>
  httpService.post<Response<null>>(`${JJAN_URL}${userRoutes.existsEmail}`, {
    data: email,
  });

export const isNicknameExistedApi = (nickname: string) =>
  httpService.post<Response<null>>(`${JJAN_URL}${userRoutes.existsNickname}`, {
    data: nickname,
  });

export const useFetchRandomNickname = () =>
  serverStateManager.fetch<Response<string>>({
    url: `${JJAN_URL}${userRoutes.randomNickname}`,
    config: {
      suspense: false,
    },
  });
