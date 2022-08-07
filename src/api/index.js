import express from "express";
// eslint-disable-next-line import/no-cycle
import addProblem from "./problems/addProblem.js";

const router = express.Router();

router.use("/addProblem", addProblem);

export default router;