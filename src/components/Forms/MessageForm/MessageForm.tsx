import React, { useState } from "react";
import Input from "../../ui/Input/Input";
import SendButton from "../../ui/SendButton/SendButton";
import classes from "./MessageForm.module.scss";

interface Props {
  handleMessage: (message: string) => void;
}

const MessageForm = ({ handleMessage }: Props) => {
  const [newMessage, setNewMessage] = useState<string>("");

  const handleInputChange = (newMsg: string) => {
    setNewMessage(newMsg);
  };

  const onSubmit = () => {
    handleMessage(newMessage);
    setNewMessage("");
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSubmit();
    }
  };

  return (
    <form className={classes.MessageForm}>
      <Input
        value={newMessage}
        handleInputChange={handleInputChange}
        handleKeyPress={handleKeyPress}
      />
      <SendButton handleSubmit={onSubmit} />
    </form>
  );
};

export default MessageForm;
