import express from "express";
const router = express.Router();
import {
  addOrders,
  myOrders,
  paid,
  MyorderById,
  allorders,
  deliver,
  getOrdersbyid,
} from "../controler/ordercontroler.js";
import { protect, admin } from "../middleware/protext.js";
router.route("/addorders").post(protect, addOrders);
router.route("/allorders").get(protect, admin, allorders);
router.route("/myorderbyid/:id").get(protect, MyorderById);
router.route("/myorders").get(protect, myOrders);
router.route("/:id").get(protect, admin, getOrdersbyid);
router.route("/:id/paid").put(protect, paid);
router.route("/:id/deliver").put(protect, admin, deliver);
export default router;
