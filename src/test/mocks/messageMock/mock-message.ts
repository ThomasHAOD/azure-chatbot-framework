import { Message } from "botframework-directlinejs";

const mockMessage: Message = {
  type: "message",
  id: "mesfaasdgeId|01",
  timestamp: "2020-10-20T18:31:26.761997Z",
  channelId: "directline",
  attachments: [],
  conversation: { id: "81fixB77LSnGAdNh6P5NaG-p" },
  entities: [],
  from: { id: "Chatbot", name: "YSChatbotTest" },
  inputHint: "ignoringInput",
  speak: "Hi there, welcome to the Chatbot!|How can I help?",
  text: "Hi there, welcome to the Chatbot!|How can I help?",
};

export default mockMessage;
