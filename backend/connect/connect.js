import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const connect = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("connected to mongoose");
  } catch (err) {
    console.log(" can not connected to mongoose");
    process.exit(1);
  }
};
