import React from "react";
import classes from "./Message.module.scss";
import ChatBotAvatar from "../../../../assets/images/Generic_User-01.png";
import UserAvatar from "../../../../assets/images/Generic_User-01.png";
import { parseTime } from "../../../../helpers/getTime";
import { Message } from "botframework-directlinejs";

export interface Props {
  message: Message;
}

const MessageElement = ({ message }: Props) => {
  let image = UserAvatar;
  const textboxClasses = [classes.TextBox];
  const isChatbot = message.inputHint;
  const messageTime = parseTime(message.timestamp);

  isChatbot
    ? textboxClasses.push(classes.Chatbot)
    : textboxClasses.push(classes.User);

  isChatbot && (image = ChatBotAvatar);

  return (
    <div className={classes.Message}>
      {isChatbot && <img src={image} alt="sender's avatar" />}
      <figure className={textboxClasses.join(" ")}>
        <p className={classes.MessageText}>{message.text}</p>
        <p className={classes.MessageTime}>{messageTime}</p>
      </figure>
      {!isChatbot && <img src={image} alt="sender's avatar" />}
    </div>
  );
};

export default MessageElement;
