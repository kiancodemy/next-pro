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
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);

  next();
});
userschema.method("passfiner", async function (pass) {
  return await bcrypt.compare(pass, this.password);
});
const User = mongoose.model("User", userschema);
export default User;
