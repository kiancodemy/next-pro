import express from "express";
const router = express.Router();
import {
  addOrders,
  myOrders,
  paid,
  allorders,
  deliver,
  getOrdersbyid,
} from "../controler/ordercontroler.js";
import { protect, admin } from "../middleware/protext.js";
router.route("/addorders").post(protect, addOrders);
router.route("/allorders").get(protect, admin, allorders);
router.route("/myorders").get(protect, myOrders);
router.route("/:id").get(protect, admin, getOrdersbyid);
router.route("/:id/paid").put(protect, paid);
router.route("/:id/deliver").put(protect, admin, deliver);
export default router;
