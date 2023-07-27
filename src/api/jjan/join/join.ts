import { useNavigate } from "react-router-dom";

import { JJAN_URL } from "@/api/jjan";
import { serverStateManager } from "@/module/serverState";

export const useJoin = () => {
  const navigate = useNavigate();

  return serverStateManager.post({
    url: `${JJAN_URL}/api/user/join`,
    config: {
      onSuccess: () => navigate("/auth/signup-complete"),
      onError: () => navigate("/auth/signup"),
      retry: false,
    },
  });
};
