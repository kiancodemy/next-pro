import mongoose from "mongoose";

const userschema = new mongoose.Schema(
  {
    email: { type: String, required: true },
  },
  { timestamps: true }
);

const Email = mongoose.model("Email", userschema);
export default Email;
