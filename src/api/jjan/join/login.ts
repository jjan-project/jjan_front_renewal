import { useNavigate } from "react-router-dom";

import { JJAN_URL } from "@/api/jjan";
import { serverStateManager } from "@/module/serverState";

export const useLogin = () => {
  const navigate = useNavigate();

  return serverStateManager.post({
    url: `${JJAN_URL}/api/user/login`,
    config: {
      onSuccess: () => navigate("/home"),
      onError: () => navigate("/auth/signin"),
      retry: false,
    },
  });
};
