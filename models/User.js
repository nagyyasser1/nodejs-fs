const { DataTypes } = require("sequelize");
const { db } = require("../config/connectDB");

const User = db.define(
  "User",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  },
  {}
);

(async () => {
  await db.sync({ alter: true });
  // Code here
})();

module.exports = User;
