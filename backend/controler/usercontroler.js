import User from "../models/usermodel.js";
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      throw new Error("اطلاعات کافی نیست");
    }
    User.create({ name, email, password });
  } catch (err) {}
};
