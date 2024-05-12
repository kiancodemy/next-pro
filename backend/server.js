import exprees from "express";
import cors from "cors";
import productrouter from "./router/productrouter.js";
import userRouter from "./router/userrouter.js";
import connect from "./connect/connect.js";
connect();
const app = exprees();
app.use(cors());
app.use(exprees.json());
app.use("/products", productrouter);
app.use("/users", userRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("it is connedted");
});
