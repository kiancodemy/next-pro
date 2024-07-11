import mongoose from "mongoose";

const userschema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    answer: { type: String, required: true },
  },
  { timestamps: true }
);

const Qustions = mongoose.model("Qustions", userschema);
export default Qustions;
