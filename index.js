const express = require("express");
const app = express();
const userRouter = require("./routes/user.router");
const productRouter = require("./routes/product.router");
const profileRouter = require("./routes/profile.router");
const { connectDB } = require("./config/connectDB");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/profile", profileRouter);

connectDB()
  .then(() => {
    app.listen(3000, () => console.log("server running && db connected"));
  })
  .catch((err) => {
    console.log("falid to connect");
  });
