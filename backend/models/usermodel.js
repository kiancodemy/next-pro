import mongoose from "mongoose";

import bcrypt from "bcrypt";
const userschema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    isAdmin: { type: Boolean, require: true, default: false },
  },
  { timestamps: true }
);

userschema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);

    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;
    next();
  } catch (error) {
    return next(error);
  }
});

userschema.method("finder", async function (pass) {
  return await bcrypt.compare(pass, this.password);
});

const User = mongoose.model("User", userschema);
export default User;
