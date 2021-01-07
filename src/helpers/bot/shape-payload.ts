import { Message } from "botframework-directlinejs";

const shapePayload = (message: string, id: string): Message => {
  return {
    from: { id: id },
    type: "message",
    text: message,
  };
};

export default shapePayload;
