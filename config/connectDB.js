const { Sequelize } = require("sequelize");

const db = new Sequelize("sequelize_db", "root", null, {
  host: "127.0.0.1",
  dialect: "mysql",
});

(async () => {
  await db.sync();
})();

async function connectDB() {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

module.exports = { connectDB, db };
