import location from "./message/location.js";

// eslint-disable-next-line no-unused-vars
export default async (event, db) => {
  let reply;
  const liffId = process.env.LIFFID;
  switch (event.message.text) {
    case "回答":
      break;
    case "あああ":
      break;
    case "いち":
      return {
        type: "text",
        text: `https://liff.line.me/${liffId}/sendlocation?answer`,
      };
    case "ヒント":
      return {
        type: "text",
        text: `https://liff.line.me/${liffId}/sendlocation?hint`,
      };
    default:
      break;
  }

  if (event.message?.type === "location") {
    reply = await location(event, db);
  }

  return reply;
};
