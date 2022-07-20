import message from "./message.js";
import join from "./join.js";
import leave from "./leave.js";

export default (event, db) => {
  let reply;

  switch (event.type) {
    case "message":
      reply = message(event, db);
      break;
    case "join":
      reply = join(event, db);
      break;
    case "leave":
      reply = leave(event, db);
      break;
    default:
      break;
  }

  return reply;
};
