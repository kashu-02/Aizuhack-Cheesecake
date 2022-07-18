import message from "./message.js";
import join from "./join.js";
import leave from "./leave.js";

export default (event, db) => {
  switch (event.type) {
    case "message":
      message(event, db);
      break;
    case "join":
      join(event, db);
      break;
    case "leave":
      leave(event, db);
      break;
    default:
      break;
  }
};
