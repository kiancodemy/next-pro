import User from "../models/usermodel.js";

import { generator } from "../middleware/token.js";

///ALLL METHOD IS BELOW !////
//signup METHOD///
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      throw new Error("اطلاعات کافی نیست");
    }
    const existbefore = await User.findOne({ email });
    if (existbefore) {
      throw new Error(
        "این ایمیل برای حساب دیگری است لظفا ایمیل دیگری انتخاب کنید"
      );
    }
    const create = await User.create({ name, email, password });
    res.status(201).json({
      name: create.name,
      email: create.email,
      isAdmin: create.isAdmin,
      id: create._id,
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
//login  METHOD//
const login = async (req, res) => {
  const { email, password } = req.body;
  const find = await User.findOne({ email });
  try {
    if (find && (await find.finder(password))) {
      const token = await generator(find._id);

      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: "None",
        secure: process.env.NODE_ENV !== "development",
      });

      res.status(200).json({
        name: find.name,
        email: find.email,

        _id: find._id,
        isAdmin: find.isAdmin,
      });
    } else {
      throw new Error("کاربرد مورد نظر یافت نشد");
    }
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

//GETuserprofile  METHOD///
// get /users/profile
const getuserprofile = async (req, res) => {
  try {
    const find = await User.findById(req.user._id);
    if (find) {
      res.status(200).json({
        name: find.name,
        email: find.email,

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
//updateuserprofile
// put /users/profile
const Updateuserprofile = async (req, res) => {
  try {
    const find = await User.findById(req.user._id);
    if (find) {
      find.name = req.body.name || find.name;
      find.email = req.body.email || find.email;
      if (req.body.password) {
        find.password = req.body.password || find.password;
      }
      const updateed = await find.save();

      res.status(200).json({
        name: updateed.name,
        email: updateed.email,

        _id: updateed._id,
        isAdmin: updateed.isAdmin,
      });
    } else {
      throw new Error("کاربر مورد نظر یافت نشد");
    }
  } catch (err) {
    res.status(404).json({ message: "عملیات موفقیت آمیز نبود" });
  }
};
//delete /users/delete/:id
const deleteuserprofile = async (req, res) => {
  try {
    const find = await User.findByIdAndDelete(req, params.id);
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
    await res.cookie("jwt", "", {
      expires: new Date(0),
      httpOnly: true,
    });
    res.status(200).json({ message: "خروج از حساب با موفقیت انجام شد" });
  } catch (err) {
    res.status(404).json({ message: "هنوز خارج نشدید" });
  }
};
const allUsers = async (req, res) => {
  try {
    const all = await User.find({}).select("-password");
    res.status(201).json(all);
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
