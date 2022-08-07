import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { liffId: process.env.LIFFID });
});
router.get("/sendlocation", (req, res) => {
  res.render("sendlocation", { liffId: process.env.LIFFID });
});

export default router;