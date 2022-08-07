/* eslint-disable camelcase */
import express from "express"

// eslint-disable-next-line import/no-cycle
import { db } from "../../server.js"

const router = express.Router()

// eslint-disable-next-line no-unused-vars
router.post("/", async (req, res, next) => {
  console.log(JSON.stringify(req.body))
  if (!req.body.problem_statement || !req.body.answer_latitude || !req.body.answer_longitude || !req.body.answer_name || !req.body.answer_description) {
    throw new Error({
      message: "パラメータが不足しています",
      status: 400,
    });
  }

  const { problem_statement, answer_latitude, answer_longitude, answer_name, answer_description } = req.body;
  
  const result = await db.problems.create({ 
    problem_statement,
    answer_latitude,
    answer_longitude,
    answer_name,
    answer_description,
  }).catch(err => {
    console.log(`Error: ${err}`);
    throw new Error({
      message: "データベースエラー",
      status: 500,
    });
  })
  
  res.json(result);

});

export default router;