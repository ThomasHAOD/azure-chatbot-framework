/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from "react";
import { ChatBotState } from "../types/types";
import createBot from "../helpers/bot/create-bot";

import handlePost from "../helpers/bot/handle-post";
import shapePayload from "../helpers/bot/shape-payload";
import { Activity } from "botframework-directlinejs";

const useMessageHistory = () => {
  const [messageHistory, setMessageHistory] = useState<ChatBotState>([]);
  const updateHistory = (activity: Activity) => {
    if (activity.type === "message") {
      console.log("updatingMessagHistory");

      const newMessageHistory = [...messageHistory, activity];

      setMessageHistory(newMessageHistory);
    }
  };

  return { messageHistory, updateHistory };
};

const chatbotConnection = createBot();
export const useChatbot = (userId: string) => {
  const [botInitialized, setBotInitialized] = useState(false);
  const [receiving, setReceiving] = useState(false);
  const [previousWatermark, setPrevWatermark] = useState(0);
  const { messageHistory, updateHistory } = useMessageHistory();

  const handleNewMessage = async (message: string) => {
    const payload = shapePayload(message, userId);
    setReceiving(true);
    updateHistory(payload);
    setTimeout(() => {
      handlePost(payload, chatbotConnection);
    }, 500);
    console.log("sending");
  };

  const parseWatermark = (id: string): number => {
    const idString: string = id.split("|")[1];
    return parseInt(idString);
  };

  useEffect(() => {
    if (!botInitialized) {
      chatbotConnection
        .postActivity({
          type: "event",
          name: "init",
          from: { id: "1" },
          value: "",
        })
        .subscribe();
      const cb = chatbotConnection.activity$
        .filter((activity) => activity.type === "message")
        .subscribe((activity) => {
          updateHistory(activity);
          const currentWatermark = parseWatermark(activity.id!);

          setPrevWatermark(currentWatermark);
        });
      setBotInitialized(true);
      setTimeout(() => {
        cb.unsubscribe();
      }, 1000);
    }
  });

  useEffect(() => {
    if (receiving) {
      console.log("receiving");

      const cb = chatbotConnection.activity$
        .filter((activity) => {
          return activity.from.id === "demochatbot1988";
        })
        .filter((activity) => {
          const currentWatermark = parseWatermark(activity.id!);
          return currentWatermark > previousWatermark;
        })
        .subscribe((activity) => {
          updateHistory(activity);
          const currentWatermark = parseWatermark(activity.id!);

          setPrevWatermark(currentWatermark);
        });
      setBotInitialized(true);
      setTimeout(() => {
        cb.unsubscribe();
      }, 1000);
      setReceiving(false);
    }
  });

  return {
    handleNewMessage,
    messageHistory,
  };
};
