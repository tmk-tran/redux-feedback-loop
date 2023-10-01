const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// GET
router.get("/", (req, res) => {
  pool
    .query('SELECT * FROM "feedback";')
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error GET /form", error);
      res.sendStatus(500);
    });
});

// POST
router.post("/", (req, res) => {
  console.log("POST request at /form");
  const newData = req.body;
  const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                            VALUES ($1, $2, $3, $4)`;

  pool
    .query(queryText, [
      newData.feeling,
      newData.understanding,
      newData.support,
      newData.comments,
    ])
    .then((response) => {
      console.log(response);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("Error in POST request", err);
      res.sendStatus(500);
    });
});

module.exports = router;