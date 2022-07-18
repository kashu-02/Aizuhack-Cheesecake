import follow from "./follow.js";
import unfollow from "./unfollow.js";
import message from "./message.js";

export default (event, db) => {
  switch (event.type) {
    case "follow":
      follow(event, db);
      break;
    case "unfollow":
      unfollow(event, db);
      break;
    case "message":
      message(event, db);
      break;
    default:
      break;
  }
};
