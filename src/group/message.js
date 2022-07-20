import startGame from "./message/startGame.js";

// eslint-disable-next-line no-unused-vars
export default (event, db) => {
  let reply;
  console.log(event.message.text);
  switch (event.message.text) {
    case "ゲーム作成":
      break;
    case "参加":
      break;
    case "ゲーム開始":
      reply = startGame(event, db);
      break;
    case "強制終了":
      break;
    default:
      break;
  }

  return reply;
};
