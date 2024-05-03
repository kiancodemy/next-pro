import exprees from "express";
import dotenv from "dotenv";
const app = exprees();
app.use(exprees.json());
dotenv.config();
app.get("/", (req, res) => {
  res.json({ data: "kir" });
});

app.listen(process.env.PORT, () => {
  console.log("it is connedted");
});
