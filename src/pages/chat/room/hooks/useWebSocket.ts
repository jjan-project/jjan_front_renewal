import { QueryObserverBaseResult } from "@tanstack/react-query";
import { useEffect, useState } from "react";

type RefetchType = QueryObserverBaseResult["refetch"];

const useWebSocket = (url: string, refetchData: RefetchType) => {
  const [socketConnected, setSocketConnected] = useState(false);
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    const websocket = new WebSocket(url);
    websocket.onopen = () => {
      console.info(`connected to ${url}`);
      setSocketConnected(true);
    };
    websocket.onclose = error => {
      console.info(`disconnect from ${url}`);
      console.info(error);
    };
    websocket.onerror = error => {
      console.info(`connection error ${url}`);
      console.info(error);
    };

    websocket.onmessage = () => {
      refetchData();
    };

    setWs(websocket);

    return () => {
      console.info("clean up ws");
      websocket.close();
    };
  }, []);

  return [ws, socketConnected];
};

export { useWebSocket };
