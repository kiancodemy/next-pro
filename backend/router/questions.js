import express from "express";
import Qustions from "../models/question.js";
const router = express.Router();
router.get("/Qall", async (req, res) => {
  try {
    const get = await Qustions.find({});
    res.status(201).json(get);
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
});

export default router;
