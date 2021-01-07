import { DirectLine } from "botframework-directlinejs";

const createBot = () =>
  new DirectLine({
    token: process.env.REACT_APP_AZURE_BOT_TOKEN,
  });

export default createBot;
