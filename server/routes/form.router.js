const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// GET
router.get("/", (req, res) => {
  pool
    .query('SELECT * FROM "feedback" ORDER BY "id" DESC;')
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

  // back end verification
  if ((!newData.feeling, !newData.understanding, !newData.support)) {
    console.log("Missing data in request");
    res.sendStatus(400);
    return;
  }

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

// DELETE
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const sqlText = `DELETE FROM "feedback" WHERE "id" = $1;`;

  pool
    .query(sqlText, [id])
    .then((result) => {
      res.sendStatus(204);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
