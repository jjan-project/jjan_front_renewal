import { JJAN_URL } from "@/api/jjan";
import { serverStateManager } from "@/module/serverState";

export const useLogin = () => {
  return serverStateManager.post({
    url: `${JJAN_URL}/api/user/login`,
  });
};
