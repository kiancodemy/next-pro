import express from "express";
import { getall, getById } from "../controler/productcontroler.js";
const router = express.Router();
router.route("/").get(getall);
router.route("/:id").get(getById);
export default router;
