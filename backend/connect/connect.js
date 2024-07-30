import mongoose from "mongoose";
import dotenv from "dotenv";
///conect to mongo db//
dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("connected to mongoose");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
export default connect;
