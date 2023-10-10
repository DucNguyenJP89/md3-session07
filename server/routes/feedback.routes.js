const express = require("express");
const db = require("../utils/database");
const router = express.Router();
const fs = require("fs");

const basePath =
  "/Users/ducnguyen/Documents/Personal/RikkeiAcademy/MD3/session07/server";

const checkExists = (req, res, next) => {
  const { id } = req.params;
  let result = db.execute(`SELECT * FROM feedbacks WHERE id=${id}`);
  result
    .then((data) => {
      const feedback = data[0];
      if (feedback.length === 0) {
        res.json({
          status: 404,
          message: "Feedback not found",
        });
      } else {
        next();
      }
    })
    .catch((err) => console.log(err));
};

// api to get all feedbacks
router.get("/", (req, res) => {
  let result = db.execute("SELECT * FROM feedbacks");
  result
    .then((data) =>
      res.json({
        status: "success",
        feedbacks: data[0],
      })
    )
    .catch((err) =>
      res.json({
        status: err.status,
        message: err.message,
      })
    );
});

// api to create a new feedback
router.post("/", (req, res) => {
  let { point, feedback } = req.body;
  let result = db.execute(`INSERT INTO feedbacks (point, feedback) VALUES ('${point}', '${feedback}');`);
  result.then(data => {
    console.log(data[0]);
    res.json({
      status: "success",
      message: "Added new feedback successfully",
    });
  }).catch((err) => console.log(err));
});

// api to get one feedback
router.get("/:id", checkExists, (req, res) => {
  res.json({
    message: "testing",
  });
});

// api to update a feedback
router.patch("/:id", checkExists, (req, res) => {
  const { id } = req.params;
  const { point, feedback } = req.body;
  let updateQuery = `UPDATE feedbacks SET point='${point}', feedback='${feedback}' WHERE (id='${id}')`;
  let result = db.execute(updateQuery);
  result.then(data => {
    console.log(data);
    res.json({
      status: "success",
      message: "Feedback updated successfully",
    });
  }).catch(err => console.log(err));
});

// api to delete a feedback
router.delete("/:id", checkExists, (req, res) => {
  const { id } = req.params;
  let deleteQuery = `DELETE FROM feedbacks WHERE id='${id}'`;
  let result = db.execute(deleteQuery);
  result.then(data => {
    console.log(data);
    res.json({
      status: "success",
      message: "Feedback deleted successfully",
    });
  }).catch(err => console.log(err));
});

module.exports = router;
