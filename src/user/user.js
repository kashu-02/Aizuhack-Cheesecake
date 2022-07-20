import follow from "./follow.js";
import message from "./message.js";
import unfollow from "./unfollow.js";

export default async (event, db) => {
  let reply;
  switch (event.type) {
    case "follow":
      reply = await follow(event, db);
      break;
    case "unfollow":
      reply = await unfollow(event, db);
      break;
    case "message":
      reply = await message(event, db);
      break;
    default:
      break;
  }

  return reply;
};
