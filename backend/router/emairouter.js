import express from "express";
import Email from "../models/email.js";
const router = express.Router();
router.post("/emaisender", async (req, res) => {
  try {
    const find = await Email.find({ email: req.body.email });

    if (find.length > 0) {
      throw new Error("این ایمیل قبلا ثبت شده است");
    }
    const create = await Email.create({ email: req.body.email });
    res.status(201).json(create);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

export default router;
