import exprees from "express";
import cookieparser from "cookie-parser";
import cors from "cors";
import productrouter from "./router/productrouter.js";
import userRouter from "./router/userrouter.js";
import connect from "./connect/connect.js";
import orderRout from "./router/orders.js";
import email from "./router/emairouter.js";
import router from "./router/questions.js";
import dotev from "dotenv";

dotev.config();
connect();
const app = exprees();
app.use(cookieparser());

app.use(
  cors({
    origin: process.env.ADDRESS,
    credentials: true,
  })
);

app.use(exprees.json());
app.use(cookieparser());
app.use(exprees.urlencoded({ extended: true }));

app.use("/products", productrouter);
app.use("/users", userRouter);
app.use("/orders", orderRout);
app.use("/email", email);
app.use("/question", router);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("it is connedted");
});
