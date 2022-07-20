import location from "./message/location.js";

// eslint-disable-next-line no-unused-vars
export default async (event, db) => {
  let reply;

  switch (event.message.text) {
    case "回答":
      break;
    case "あああ":
      break;
    default:
      break;
  }

  if (event.message?.type === "location") {
    reply = await location(event, db);
  }

  return reply;
};
