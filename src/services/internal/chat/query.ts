import { chatRoutes } from "@/routes";

import { JJAN_URL } from "../domain";
import { ChatAllRoomResponseData, ChatMessageResponseDate } from "../types";

import { serverStateManager } from "@/module/serverState";
import { pathToUrl } from "@/utils/pathToURL";

export const useFetchChatMessages = (chatId: string | undefined) =>
  serverStateManager.fetch<ChatMessageResponseDate[]>({
    url: `${JJAN_URL}${pathToUrl(chatRoutes.getChatMessages, { chatId })}`,
  });

export const useFetchAllChat = () =>
  serverStateManager.fetch<ChatAllRoomResponseData[]>({
    url: `${JJAN_URL}${chatRoutes.getChatAllRoom}`,
    config: { suspense: false },
  });
