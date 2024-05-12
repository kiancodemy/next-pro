import mongoose from "mongoose";
import dotenv from "dotenv";
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
