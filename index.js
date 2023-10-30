const express = require("express");
const app = express();
const db = require("./models");
const userRouter = require("./routes/user.router");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", userRouter);

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("server runing on port 3000");
  });
});
