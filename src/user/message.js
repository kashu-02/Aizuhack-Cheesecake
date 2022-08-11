import flexMessage from "../flexmessage/index.js";
import location from "./message/location.js";

// eslint-disable-next-line no-unused-vars
export default async (event, db) => {
  let reply;
  const liffId = process.env.LIFFID;
  switch (event.message.text) {
    case "回答":
      return {
        type: "text",
        text: `https://liff.line.me/${liffId}/sendlocation?answer`,
      };
    case "ヒント":
      return {
        type: "text",
        text: `https://liff.line.me/${liffId}/sendlocation?hint`,
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
        contents: flexMessage.question("会津若松市のシンボル「鶴ヶ城」。白虎隊士も見た国内唯一の赤瓦の天守閣が甦りました！"),
      };
    default:
      break;
  }

  if (event.message?.type === "location") {
    reply = await location(event, db);
  }

  return reply;
};
