import forceQuit from "../../group/message/forceQuit.js";

export default async (event, db) => {
  const latitudeToleranceMeter = 30;
  const longitudeToleranceMeter = 30;
  const userid = event.source.userId;

  let reply;

  const groupid = (await db.users.findOne({ where: { userid } }))?.groupid;
  console.log(groupid);
  if (!groupid) {
    return {
      type: "text",
      text: "参加中のゲームがありません",
    };
  }

  const gameid = (await db.groups.findOne({ where: { groupid } }))?.gameid;
  if (!gameid) {
    return {
      type: "text",
      text: "参加中のゲームが開始していません",
    };
  }

  const { problemid } = await db.games.findOne({ where: { gameid } });
  const {
    problem_statement: problemStatement,
    answer_latitude: answerLatitude,
    answer_longitude: answerLongitude,
    answer_name: answerName,
  } = await db.problems.findOne({ where: { problemid } });

  const latitudeToleranceDegree =
    (180.0 * latitudeToleranceMeter) /
    (6378136.59 * Math.cos((answerLatitude * Math.PI) / 180.0) ** 2 * Math.PI);
  const longitudeToleranceDegree =
    (360.0 * longitudeToleranceMeter) /
    (6378136.59 * Math.cos((answerLongitude * Math.PI) / 180.0) ** 2 * Math.PI);

  const { latitude, longitude } = event.message;

  if (
    Math.abs(latitude - answerLatitude) <= latitudeToleranceDegree &&
    Math.abs(longitude - answerLongitude) <= longitudeToleranceDegree
  ) {
    reply = {
      type: "text",
      text: `正解です！ \n\n問題: ${answerName}\n問題文: ${problemStatement}`,
    };

    const quitMessage = await forceQuit({ source: { groupId: groupid } }, db);

    if (quitMessage.text === "強制終了処理中にエラーが発生しました") {
      reply = {
        type: "text",
        text: "終了処理中にエラーが発生しました",
      };
    }
  } else {
    reply = {
      type: "text",
      text: `不正解です…… \n\n問題文: ${problemStatement}`,
    };
  }

  return reply;
};
