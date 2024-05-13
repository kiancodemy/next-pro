import express from "express";
import { protect, admin } from "../middleware/protext.js";
const router = express.Router();
import {
  signup,
  login,
  getuserById,
  logout,
  getuserprofile,
  Updateuserprofile,
  allUsers,
  deleteuserprofile,
} from "../controler/usercontroler.js";
router.route("/allUsers").get(admin, allUsers);
router.route("/getuserprofile").get(protect, getuserprofile);
router.route("/:id").delete(deleteuserprofile).get(getuserById);
router.route("/signup").post(signup);
router.route("/login").post(login);

router.route("/Updateuserprofile").put(protect, Updateuserprofile);

router.route("/logout").post(logout);

export default router;
