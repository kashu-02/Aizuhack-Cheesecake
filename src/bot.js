import line from "@line/bot-sdk";

import group from "./group/group.js";
import user from "./user/user.js";

const client = new line.Client({
  channelAccessToken: process.env.ChannelAccessToken,
  channelSecret: process.env.ChannelSecret,
});

export default (req, res, db) => {
  const { events } = req.body;

  console.log(`events: ${JSON.stringify(events)}`);
  let reply;
  events.forEach(async (event) => {
    switch (event.source.type) {
      case "user":
        reply = await user(event, db);
        break;
      case "group":
        reply = await group(event, db);
        break;
      case "room":
        console.log(`room`);
        break;
      default:
        res.JSON({});
        break;
    }
    console.log(`message: ${JSON.stringify(reply)}`);
    if (reply !== undefined) {
      // 返信するメッセージをログに出力
      console.log(`返信メッセージ: ${JSON.stringify(reply)}`);
      // メッセージを返信
      client
        .replyMessage(event.replyToken, reply)
        .then(() => {
          console.log("Reply succeeded");
        })
        .catch((err) =>
          console.log(`${JSON.stringify(reply)}\n\n\n${JSON.stringify(err)}`)
        );
    }
  });
};
