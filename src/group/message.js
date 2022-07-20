import createGame from "./message/createGame.js";
import forceQuit from "./message/forceQuit.js";
import startGame from "./message/startGame.js";

// eslint-disable-next-line no-unused-vars
export default async (event, db) => {
  let reply;
  console.log(event.message.text);
  switch (event.message.text) {
    case "ゲーム作成":
      reply = await createGame(event, db);
      break;
    case "参加":
      break;
    case "ゲーム開始":
      reply = await startGame(event, db);
      break;
    case "強制終了":
      reply = await forceQuit(event, db);
      break;
    default:
      break;
  }

  return reply;
};
