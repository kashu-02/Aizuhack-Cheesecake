import crypto from "crypto";
import flexMessage from '../../flexmessage/index.js'

export default async (event, db) => {
  const groupid = event.source.groupId;
  const gameid = crypto.randomUUID();

  const exist = await db.groups.findOne({ where: { groupid } }).catch((err) => {
    console.log(err);
    return {
      type: "text",
      text: "データベース接続確立エラー",
    };
  });

  if (exist !== null) {
    return {
      type: "text",
      text: "すでに進行中のゲームがあります。終了するには「強制終了」と返信してください",
    };
  }

  await db.groups.create({ groupid, gameid });

  console.log(`created game: groupid=${groupid}, gameid=${gameid})}`);
  return {
    type: "flex",
    altText: "ゲームを作成しました",
    contents: flexMessage.createGame(),
  };
};
