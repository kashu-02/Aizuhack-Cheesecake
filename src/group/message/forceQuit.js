export default async (event, db) => {
  const groupid = event.source.groupId;
  const groupExist = await db.groups.findOne({ where: { groupid } });
  const gameid = groupExist?.gameid;
  const users = (await db.users.findAll({ where: { groupid } })).length > 0;

  let reply;
  console.log(groupid);
  console.log(gameid);
  console.log(users);

  try {
    if (gameid) await db.games.destroy({ where: { gameid } });
    if (users) await db.users.destroy({ where: { groupid } });
    if (groupExist) await db.groups.destroy({ where: { groupid } });

    if (!gameid && !users && !groupExist) {
      reply = {
        type: "text",
        text: "進行中のゲームはありません",
      };
    } else {
      reply = {
        type: "text",
        text: "強制終了処理が完了しました",
      };
    };
  } catch (err) {
    console.log(`error during forceQuit(): \n\t ${err}`);
    reply = {
      type: "text",
      text: "強制終了処理中にエラーが発生しました",
    };
  }

  return reply;
};
