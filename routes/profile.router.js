const router = require("express").Router();
const db = require("../config/connectDB");

router.post("/", (req, res, next) => {
  try {
    const { firstname, lastname, country, UserId } = req.body;
    db.Profile.create({ firstname, lastname, country, UserId })
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

router.get("/", (req, res, next) => {
  try {
    db.Profile.findAll({ include: [db.User] })
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

router.get("/:id", (req, res, next) => {
  try {
    db.Profile.findOne({ where: { id: req.params.id }, include: [db.User] })
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

router.put("/:id", (req, res, next) => {
  try {
    db.Profile.update(
      {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        country: req.body.country,
        UserId: req.body.UserId,
      },
      { where: { id: req.params.id } }
    )
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

router.delete("/:id", (req, res, next) => {
  try {
    db.Profile.destroy({ where: { id: req.params.id } })
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

module.exports = router;
