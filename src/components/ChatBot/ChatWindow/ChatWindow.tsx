import React from "react";
import Header from "../Header/Header";
import MessageForm from "../../Forms/MessageForm/MessageForm";

import classes from "./ChatWindow.module.scss";

interface Props {
  children?: JSX.Element;
  handleMessage: (message: string) => void;
}

const ChatWindow = ({ children, handleMessage }: Props) => (
  <main className={classes.ChatWindow}>
    <Header />
    {children}
    <MessageForm handleMessage={handleMessage} />
  </main>
);

export default ChatWindow;
