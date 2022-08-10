import line from "@line/bot-sdk";

const client = new line.Client({
  channelAccessToken: process.env.ChannelAccessToken,
  channelSecret: process.env.ChannelSecret,
});

export default async (event, db) => {
  const groupid = event.source.groupId;
  const isExistGroup = await db.groups
    .findOne({ where: { groupid } })
    .catch((err) => {
      console.log(err);
      return {
        type: "text",
        text: "データベース接続確立エラー",
      };
    });
  if (!isExistGroup) {
    return {
      type: "text",
      text: "進行中のゲームがありません",
    };
  }

  const userName = (
    await client.getGroupMemberProfile(
      event.source.groupId,
      event.source.userId
    )
  ).displayName;
  const isExistUser = await db.users
    .findOne({ where: { userid: event.source.userId } })
    .catch((err) => {
      console.log(err);
      return {
        type: "text",
        text: "データベースエラー",
      };
    });

  if (isExistUser) {
    return {
      type: "text",
      text: `すでに${userName}さんは参加しています。`,
    };
  }

  db.users
    .create({
      userid: event.source.userId,
      groupid: event.source.groupId,
    })
    .catch((err) => {
      console.log(err);
      return {
        type: "text",
        text: "データベースエラー",
      };
    });

  db.hintquota
    .create({
      userid: event.source.userId,
      lasthint: null,
    })
    .catch((err) => {
      console.log(err);
      db.users.destroy({ where: { userid: event.source.userId } });
      return {
        type: "text",
        text: "データベースエラー",
      };
    });

  return {
    type: "text",
    text: `${userName}さんが参加しました。`,
  };
};
