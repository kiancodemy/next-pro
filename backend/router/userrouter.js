import express from "express";
const router = express.Router();
import { signup } from "../controler/usercontroler.js";
router.route("/signup").post(signup);
export default router;
