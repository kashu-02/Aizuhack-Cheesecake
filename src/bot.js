import line from "@line/bot-sdk";

import user from "./user/user.js";
import group from "./group/group.js";

const client = new line.Client({
  channelAccessToken: process.env.ChannelAccessToken,
  channelSecret: process.env.ChannelSecret,
});

export default (req, res, db) => {
  const { events } = req.body;

  console.log(`events: ${JSON.stringify(events)}`);
  let reply;
  events.forEach((event) => {
    switch (event.source.type) {
      case "user":
        reply = user(event, res, db);
        break;
      case "group":
        reply = group(event, res, db);
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
