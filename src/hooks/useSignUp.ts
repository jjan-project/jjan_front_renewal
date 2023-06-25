import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { QUERY_KEY } from "@/constants/queryKeys";
import { cookieManager } from "@/module/cookie";
import { KEY } from "@/module/cookie/constant";
import { httpService } from "@/module/http";
import { State } from "@/store/signupStore";

type DataType = {
  item: string;
  target: string;
  message: string;
  token: {
    accessToken: string;
    refreshToken?: string;
  };
};

export function useSignUp(baseURL: string) {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const signUpMutation = useMutation(
    (userData: State): Promise<DataType> => httpService.post(baseURL, userData),
    {
      onSuccess: (data: DataType) => {
        if (data.message === "OK") {
          const { refreshToken, ...restToken } = data.token;
          data = { ...data, token: restToken };
          cookieManager.set(KEY.JWT_REFRESH_TOKEN, refreshToken);
        }

        queryClient.setQueryData([QUERY_KEY.user], data);
        navigate("/auth/signup/complete"); // 추후 수정 예정
      },
      onError: error => {
        // 에러 관련 모달 or 스낵바 디스플레이 예정
        console.error(error);
        navigate("/auth/signup/capacity"); // 추후 수정 예정
      },
    },
  );

  return signUpMutation;
}
