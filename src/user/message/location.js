import forceQuit from "../../group/message/forceQuit.js";
import flexMessage from "../../flexmessage/index.js";

const checkAnswer = async (event, db) => {
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
      type: "flex",
      altText: "正解です…",
      contents: flexMessage.correct(problemStatement, answerName),
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
      type: "flex",
      altText: "不正解です…",
      contents: flexMessage.incorrect(problemStatement),
    };
  }

  return reply;
};

const checkHint = async (event, db) => {
  const userid = event.source.userId;

  const lastHint = (await db.hintquota.findOne({ where: { userid } }))?.dataValues.lasthint;
  const currentDate = new Date();

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

  if(!lastHint || currentDate - lastHint >= 600_000) {
    const { problemid } = await db.games.findOne({ where: { gameid } });
    const {
      answer_latitude: answerLatitude,
      answer_longitude: answerLongitude,
    } = await db.problems.findOne({ where: { problemid } });

    const { latitude, longitude } = event.message;

    const latitudeDiff = answerLatitude - latitude;
    const longitudeDiff = answerLongitude -longitude;

    let direction = latitudeDiff >= 0.0 ? '北' : '南';
    direction += (longitudeDiff >= 0.0 ? '東' : '西');

    db.hintquota.update({ lasthint: currentDate }, { where: { userid } });

    return {
      type: "text",
      text: `目標はおおよそ ${direction} 方向です`
    }
  }

  return {
    type: "text",
    text: `前回のヒントから20分以上経過していません。\n 前回のヒントは ${lastHint} です。`,
  }
}

export default async (event, db) => {
  let reply;
  if (!(event.message.title === 'hint' || event.message.title === 'answer')) {
    return {
      type: "text",
      text: "リッチメニューから位置情報を送信してください。",
    };
  }
  if ( event.message.title === 'hint' ){
    reply = checkHint(event, db);
  } else {
    reply = checkAnswer(event, db);
  }

  return reply;
};
