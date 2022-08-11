import location from "./message/location.js";
import flexMessage from "../flexmessage/index.js";

// eslint-disable-next-line no-unused-vars
export default async (event, db) => {
  let reply;
  const liffId = process.env.LIFFID;
  switch (event.message.text) {
    case "回答":
      return {
        type: "text",
        text: `https://liff.line.me/${liffId}/sendlocation`,
      };
    case "ルールを確認":
      return {
        type: "flex",
        altText: "ルールはこちらです",
        contents: flexMessage.ruleExpresstion(),
      };
    case "問題を確認":
      return {
        type: "flex",
        altText: "問題はこちらです",
        contents: flexMessage.question(),
      };
    default:
      break;
  }

  if (event.message?.type === "location") {
    reply = await location(event, db);
  }

  return reply;
};
