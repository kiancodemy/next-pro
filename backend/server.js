import exprees from "express";
import dotenv from "dotenv";
import { connect } from "./connect/connect.js";
const app = exprees();
app.use(exprees.json());
dotenv.config();
app.get("/", (req, res) => {
  res.json({ data: "kir" });
});
const port = process.env.PORT || 5000;
connect();
app.listen(port, () => {
  console.log("it is connedted");
});
