import { Message } from "botframework-directlinejs";
import { ChatBotState } from "../../../types/types";
import React, { useRef, useEffect } from "react";
import MessageElement from "./Message/Message";
import classes from "./Messages.module.scss";
import { v4 as uuidv4 } from "uuid";

interface Props {
  messageHistory: ChatBotState;
}

const Messages = ({ messageHistory }: Props) => {
  const dummy = useRef<HTMLDivElement>(null);

  const createMessage = (msg: Message) =>
    msg.text ? <MessageElement message={msg} key={uuidv4()} /> : null;

  const messageElements = messageHistory.map(createMessage);

  useEffect(() => {
    dummy.current?.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <section className={classes.Messages}>
      {messageElements}
      <div ref={dummy} />
    </section>
  );
};

export default Messages;
