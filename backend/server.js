import exprees from "express";

import productrouter from "./router/productrouter.js";
import { connect } from "./connect/connect.js";
const app = exprees();
app.use(exprees.json());
app.use("/products", productrouter);

const port = process.env.PORT || 5000;
connect();
app.listen(port, () => {
  console.log("it is connedted");
});
