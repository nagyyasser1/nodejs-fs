const router = require("express").Router();
const { db } = require("../config/connectDB");
const User = require("../models/User");
const { Sequelize } = require("sequelize");

router.post("/", async (req, res, next) => {
  try {
    const jane = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });
    // Jane exists in the database now!
    console.log(jane instanceof User); // true
    console.log(jane.firstName); // "Jane"
    res.send(jane);
  } catch (error) {
    next(error);
  }
});

router.get("/", (req, res, next) => {
  try {
    User.findAll({
      attributes: [[Sequelize.literal("firstName"), "name"]],
      where: {
        id: 1,
      },
    })
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  } catch (error) {
    next(error);
  }
});

// router.get("/:id", (req, res, next) => {
//   try {
//     db.User.findOne({
//       where: { id: req.params.id },
//       include: [db.Profile, db.Product],
//     })
//       .then((result) => {
//         res.status(200).send(result);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(400).send(err);
//       });
//   } catch (error) {
//     next(error);
//   }
// });

// router.put("/:id", (req, res, next) => {
//   try {
//     db.User.update(
//       {
//         username: req.body.username,
//         email: req.body.email,
//         password: req.body.password,
//       },
//       { where: { id: req.params.id } }
//     )
//       .then((result) => {
//         res.status(200).send(result);
//       })
//       .catch((err) => {
//         res.status(400).send(err);
//       });
//   } catch (error) {
//     next(error);
//   }
// });

// router.delete("/:id", (req, res, next) => {
//   try {
//     db.User.destroy({ where: { id: req.params.id } })
//       .then((result) => {
//         res.status(200).send(result);
//       })
//       .catch((err) => {
//         res.status(400).send(err);
//       });
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
