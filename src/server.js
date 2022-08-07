// モジュールの読み込み
import express from "express";
import * as line from "@line/bot-sdk";

import bot from "./bot.js";
<<<<<<< HEAD
// eslint-disable-next-line import/no-cycle
import api from "./api/index.js";
import liff from "./liff/index.js";
=======
>>>>>>> 87bcc69012c0d7881d2f39e190f710f617100747

import Database from "./db/db.js";
import initTables from "./db/tables.js";

const PORT = process.env.PORT || 3000;
const app = express();

const config = {
  channelAccessToken: process.env.ChannelAccessToken,
  channelSecret: process.env.ChannelSecret,
};

const {
  DB_NAME: database,
  DB_USER: username,
  DB_PASS: password,
  DB_HOST: host,
} = process.env;

let dbOptions;
if (process.env.NODE_ENV === "production") {
  dbOptions = {
    host,
    port: 5432,
    dialect: "postgres",
    dialectOptions: {
      socketPath: host,
    },
    logging: false,
    operatorsAliases: true,
  };
} else {
  dbOptions = {
    host,
    port: 5432,
    dialect: "postgres",
    logging: false,
    operatorsAliases: true,
  };
}

const db = new Database(database, username, password, dbOptions);

try {
  db.authenticate();
  app.get("/db", (req, res) => {
    res.send("DB Auth Succeeded.");
  });
} catch (error) {
  app.get("/db", (req, res) => {
    res.send(`DB failed: ${error}`);
  });
}

initTables(db);
// eslint-disable-next-line import/prefer-default-export
export { db };

// /にアクセスがあった時、Deploy succeededと返す
app.get("/", (req, res) => {
  res.send("Deploy Succeeded.");
});

app.post("/webhook", line.middleware(config), (req, res) => {
  bot(req, res, db);
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);
app.set("views", "liff/html");
app.set('view engine', 'pug');
app.use("/liff", liff)


app.listen(PORT);
console.log(`Server running at ${PORT}`);

<<<<<<< HEAD


// error handler
// eslint-disable-next-line no-unused-vars
=======
// error handler
// eslint-disable-next-line no-unused-vars
/*
>>>>>>> 87bcc69012c0d7881d2f39e190f710f617100747
app.use((err, req, res, next) => {
  console.log(err);
  const sta = err.status || 500;
  res.status(sta).json({
    status: sta,
    message:
      sta !== 500
        ? err.message || "エラーが発生しました。"
        : "エラーが発生しました。",
  });
});
<<<<<<< HEAD
=======
*/
>>>>>>> 87bcc69012c0d7881d2f39e190f710f617100747
