import { DirectLine, Message } from "botframework-directlinejs";

const handlePost = (payload: Message, bot: DirectLine) => {
  bot.postActivity(payload).subscribe(
    (id) => console.log("Posted activity, assigned ID ", id),
    (error) => console.log("Error posting activity", error)
  );
};

export default handlePost;
