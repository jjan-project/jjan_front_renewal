import { join } from "@/routes";

import { JJAN_URL } from "@/api/jjan";
import { serverStateManager } from "@/module/serverState";

export const useJoin = () => {
  return serverStateManager.post({
    url: `${JJAN_URL}${join.signup}`,
  });
};
