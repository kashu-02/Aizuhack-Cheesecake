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
app.use((err, req, res) => {
  console.log(err);
  const status = err.stauts || 500;
  res.status(status).json({
    status,
    message:
      status !== 500
        ? err.message || "エラーが発生しました。"
        : "エラーが発生しました。",
  });
});
