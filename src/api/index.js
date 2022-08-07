import express from "express";
import addProblem from "./problems/addProblem.js";

const router = express.Router();

router.use("/addProblem", addProblem);

export default router;