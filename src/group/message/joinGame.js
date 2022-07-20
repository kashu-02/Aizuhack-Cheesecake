import line from "@line/bot-sdk";

const client = new line.Client({
  channelAccessToken: process.env.ChannelAccessToken,
  channelSecret: process.env.ChannelSecret,
});

export default async (event, db) => {
  const userName = (
    await client.getGroupMemberProfile(
      event.source.groupId,
      event.source.userId
    )
  ).displayName;
  const isNotExistUser = await db.users
    .findOne({ where: { userid: event.source.userId } })
    .catch((err) => {
      console.log(err);
      return {
        type: "text",
        text: "データベースエラー",
      };
    });

  if (isNotExistUser) {
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

  return {
    type: "text",
    text: `${userName}さんが参加しました。`,
  };
};
