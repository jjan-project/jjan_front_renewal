import { userRoutes } from "@/router";

import { JJAN_URL } from "../domain";
import type { Response } from "../types";

import { serverStateManager } from "@/module/serverState";

export const useSignin = () =>
  serverStateManager.post({
    url: `${JJAN_URL}${userRoutes.signin}`,
  });

export const useSignup = () =>
  serverStateManager.post({
    url: `${JJAN_URL}${userRoutes.signup}`,
    config: { useErrorBoundary: true },
  });

export const useFetchRandomNickname = () =>
  serverStateManager.fetch<Response<string>>({
    url: `${JJAN_URL}${userRoutes.randomNickname}`,
    config: {
      suspense: false,
    },
  });
