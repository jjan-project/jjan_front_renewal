import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import Register from "@/api/register";
import { QUERY_KEY } from "@/constants/queryKeys";
import AxiosHttpHandler from "@/module/http/implement/AxiosHttpHandler";
import { State } from "@/store/signupStore";

export function useSignUp(baseURL: string) {
  const httpHandler = new AxiosHttpHandler();
  const register = new Register(baseURL, httpHandler);
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const signUpMutation = useMutation(
    (userData: State) => register.signUp(userData),
    {
      onSuccess: data => {
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
