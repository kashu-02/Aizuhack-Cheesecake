// モジュールの読み込み
import express from "express";
import Database from "./db/db.js";
import initTables from "./db/tables.js";

const PORT = process.env.PORT || 3000;
const app = express();

const {
  DB_NAME: database,
  DB_USER: username,
  DB_PASS: password,
  DB_HOST: host,
} = process.env;

const dbOptions = {
  host,
  port: 5432,
  dialect: "postgres",
  logging: true,
  operatorsAliases: true,
};

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

// /にアクセスがあった時、Deploy succeededと返す
app.get("/", (req, res) => {
  res.send("Deploy Succeeded.");
});

app.listen(PORT);
console.log(`Server running at ${PORT}`);

// error handler
// eslint-disable-next-line no-unused-vars
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
