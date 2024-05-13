import User from "../models/usermodel.js";

import { generator } from "../middleware/token.js";
//signup
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      throw new Error("اطلاعات کافی نیست");
    }
    const create = await User.create({ name, email, password });
    res.status(201).json({
      name: create.name,
      email: create.email,
      isAdmin: create.isAdmin,
      id: create._id,
    });
  } catch (err) {
    res.status(404).json({ data: err.message });
  }
};
//login
const login = async (req, res) => {
  const { email, password } = req.body;
  const find = await User.findOne({ email });
  try {
    if (find && (await find.finder(password))) {
      const token = await generator(find._id);
      res.cookie("jwt", token, {
        maxAge: 24 * 60 * 60 * 1000,
        secure: process.env.NODE_ENV !== "development",
        httpOnly: true,
        sameSite: "strict",
      });
      res.status(200).json({
        name: find.name,
        email: find.email,
        token,
        _id: find._id,
        isAdmin: find.isAdmin,
      });
    } else {
      throw new Error("کاربرد مورد نظر یافت نشد");
    }
  } catch (err) {
    res.status(404).json({ data: err.message });
  }
};

//GETuserprofile
// get /users/profile
const getuserprofile = async (req, res) => {
  try {
    res.status(200).json({ data: "getprofile" });
  } catch (err) {
    res.status(404).json({ data: err.message });
  }
};
//updateuserprofile
// put /users/profile
const Updateuserprofile = async (req, res) => {
  try {
    res.status(200).json({ data: "updateprofile" });
  } catch (err) {
    res.status(404).json({ data: err.message });
  }
};
//delete /users/delete/:id
const deleteuserprofile = async (req, res) => {
  try {
    res.status(200).json({ data: "delete" });
  } catch (err) {
    res.status(404).json({ data: err.message });
  }
};
const getuserById = async (req, res) => {
  try {
    res.status(200).json({ data: "updateId" });
  } catch (err) {
    res.status(404).json({ data: err.message });
  }
};
const logout = async (req, res) => {
  try {
    res.status(200).json({ data: "out" });
  } catch (err) {
    res.status(404).json({ data: err.message });
  }
};
const allUsers = async (req, res) => {
  try {
    res.status(201).json({ data: "allusers" });
  } catch (err) {
    res.status(404).json({ data: "not all" });
  }
};

export {
  signup,
  login,
  getuserprofile,
  Updateuserprofile,
  deleteuserprofile,
  getuserById,
  allUsers,
  logout,
};
