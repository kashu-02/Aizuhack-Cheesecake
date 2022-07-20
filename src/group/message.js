import createGame from "./message/createGame.js";
import forceQuit from "./message/forceQuit.js";
import startGame from "./message/startGame.js";
import joinGame from "./message/joinGame.js";

// eslint-disable-next-line no-unused-vars
export default async (event, db) => {
  let reply;
  console.log(event.message.text);
  switch (event.message.text) {
    case "ゲーム作成":
      reply = await createGame(event, db);
      break;
    case "参加":
      reply = await joinGame(event, db);
      break;
    case "ゲーム開始":
      reply = await startGame(event, db);
      break;
    case "強制終了":
      reply = await forceQuit(event, db);
      break;
    /*
    case "もんだい":
      console.log(`db.problems: ${JSON.stringify(db.problems)}\n\n\n`);
      db.problems.create({
        problemid: "1b669133-af39-4b11-9c88-f677a2330914",
        problem_statement: "問題文のテスト(鶴ヶ城)",
        answer_latitude: 37.48782473,
        answer_longitude: 139.92966413,
        answer_name: "鶴ヶ城",
      });
      
      break;
    */
    default:
      break;
  }

  return reply;
};
