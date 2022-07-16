// モジュールの読み込み
import express from "express";

const PORT = process.env.PORT || 3000;
const app = express();

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
