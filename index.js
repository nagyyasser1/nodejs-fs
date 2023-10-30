const express = require("express");
const app = express();
const db = require("./models");
const userRouter = require("./routes/user.router");
const productRouter = require("./routes/product.router");
const profileRouter = require("./routes/profile.router");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/profile", profileRouter);

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("server runing on port 3000");
  });
});
