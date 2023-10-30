const router = require("express").Router();
const db = require("../models");

router.post("/", (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    db.User.create({ username, email, password })
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
    db.User.findAll()
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
    db.User.findOne({ where: { id: req.params.id } })
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
    db.User.update(
      {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
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
    db.User.destroy({ where: { id: req.params.id } })
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
