import mongoose from "mongoose";
export const connect = async () => {
  await mongoose.connect(process.env.URL);
  console.log("connected to mongoose");
};
