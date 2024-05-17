import jwt from "jsonwebtoken";
import User from "../models/usermodel.js";
export const protect = async (req, res, next) => {
  try {
    let token;
    token = await req.cookies.jwt;
    if (token) {
      const find = await jwt.verify(token, process.env.SECRETJWT);

      const finder = await User.findById(find.userid).select("-password");

      req.user = finder;

      next();
    } else {
      throw new Error("لظفا وارد حساب کاربری خود شوید");
    }
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};
export const admin = async (req, res, next) => {
  try {
    if (req.user && req.user.isAdmin) {
      next();
    } else {
      throw new Error("شما ادمین نیستید");
    }
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
