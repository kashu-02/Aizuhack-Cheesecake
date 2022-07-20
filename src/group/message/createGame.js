import crypto from "crypto";

export default async (event, db) => {
  const groupid = event.source.groupId;
  const gameid = crypto.randomUUID();

  const exist = await db.groups.findOne({ where: { groupid } });
  if (exist !== null) {
    return {
      type: "text",
      text: "すでに進行中のゲームがあります。終了するには「強制終了」と返信してください",
    };
  }

  await db.groups.create({ groupid, gameid });

  console.log(`created game: groupid=${groupid}, gameid=${gameid})}`);
  return {
    type: "text",
    text: `ゲームを作成しました: ${gameid}`,
  };
};
