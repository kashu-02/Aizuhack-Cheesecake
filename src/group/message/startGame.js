/* eslint-disable camelcase */
import moment from "moment";
import "moment/locale/ja.js";

moment.locale("ja");

// eslint-disable-next-line no-unused-vars
export default async (event, db) => {
  let message;
  const { gameid } = await db.groups
    .findOne({
      where: {
        groupid: event.source.groupId,
      },
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
      message = {
        type: "text",
        text: `データベースエラー`,
      };
    });

  const problems = await db.problems.findAll({}).catch((err) => {
    console.log(`Error: ${err}`);
    message = {
      type: "text",
      text: `データベースエラー`,
    };
  });
  console.log(`problems: ${JSON.stringify(problems)}`);
  const { problemid, problem_statement } =
    problems[Math.floor(Math.random() * problems.length)];

  db.games
    .create({
      gameid,
      problemid,
      starttime: moment(event.timestamp),
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
      message = {
        type: "text",
        text: `データベースエラー`,
      };
    });

  message = {
    type: "text",
    text: `問題開始\n\n問題文: ${problem_statement}\n\n問題ID: ${problemid}`,
  };

  return message;
};
