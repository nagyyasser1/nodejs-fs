const router = require("express").Router();
const db = require("../models");

router.post("/", (req, res, next) => {
  try {
    const { name, price, UserId } = req.body;
    db.Product.create({ name, price, UserId })
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
    db.Product.findAll()
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
    db.Product.findOne({ where: { id: req.params.id }, include: [db.User] })
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
    db.Product.update(
      {
        name: req.body.name,
        price: req.body.price,
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
    db.Product.destroy({ where: { id: req.params.id } })
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
