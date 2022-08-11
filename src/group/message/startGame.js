/* eslint-disable camelcase */
import moment from "moment";
import "moment/locale/ja.js";
import flexMessage from "../../flexmessage/index.js";

moment.locale("ja");

// eslint-disable-next-line no-unused-vars
export default async (event, db) => {
  const groups = await db.groups
    .findOne({
      where: {
        groupid: event.source.groupId,
      },
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
      return {
        type: "text",
        text: `データベースエラー`,
      };
    });
  if (!groups) {
    return {
      type: "text",
      text: `ゲームが作成されていません`,
    };
  }
  const { gameid } = groups;

  const problems = await db.problems.findAll({}).catch((err) => {
    console.log(`Error: ${err}`);
    return {
      type: "text",
      text: `データベースエラー`,
    };
  });
  console.log(`problems: ${JSON.stringify(problems)}`);
  const { problemid, problem_statement } =
    problems[Math.floor(Math.random() * problems.length)];

  const isExistGameid = await db.games.findOne({
    where: {
      gameid,
    },
  });
  if (isExistGameid) {
    return {
      type: "text",
      text: `すでに進行中のゲームがあります。終了するには「強制終了」と返信してください`,
    };
  }

  db.games
    .create({
      gameid,
      problemid,
      starttime: moment(event.timestamp),
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
      return {
        type: "text",
        text: `データベースエラー`,
      };
    });
  
  return {
    type: "flex",
    altText: "問題開始",
    contents: flexMessage.question(problem_statement),
  };
};
