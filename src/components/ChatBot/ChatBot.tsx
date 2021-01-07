import React from "react";
import ChatWindow from "./ChatWindow/ChatWindow";
import Messages from "./Messages/Messages";
import { useChatbot } from "../../hooks/useChatbot";
import classes from "./ChatBot.module.scss";
import { v4 as uuidv4 } from "uuid";

const userId = uuidv4();
const ChatBot = () => {
  const { messageHistory, handleNewMessage } = useChatbot(userId);

  return (
    <div className={classes.ChatBot}>
      <ChatWindow handleMessage={handleNewMessage}>
        <Messages messageHistory={messageHistory} />
      </ChatWindow>
    </div>
  );
};

export default ChatBot;
