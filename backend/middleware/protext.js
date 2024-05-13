import jwt from "jsonwebtoken";
import User from "../models/usermodel.js";
export const protect = async (req, res, next) => {
  let token;
  token = req.cookies.jwt;

  if (token) {
    try {
      const find = jwt.verify(token, process.env.SECRETJWT);
      console.log("find" + find.userid);
      const finder = await User.findById(find.userid).select("-password");
      console.log("finder" + finder);
      req.user = finder;
      next();
    } catch (err) {
      res.status(404).json({
        message: err.message,
      });
    }
  } else {
    throw new Error("no");
  }
};
export const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    throw new Error("شما ادمین نیستید");
  }
};
