import crypto from "crypto";

export default (event, db) => {
  const { groupid } = event.source;
  const gameid = crypto.randomUUID();

  db.groups.create({ groupid, gameid });
  console.log(`created game: ${{ groupid, gameid }}`);
  return `ゲームを作成しました: ${gameid}`;
};
