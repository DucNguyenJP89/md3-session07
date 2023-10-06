const express = require('express')
const router = express.Router();
const fs = require('fs');

const basePath = "/Users/ducnguyen/Documents/Personal/RikkeiAcademy/MD3/session07/server"


// api to get all feedbacks
router.get('/', (req, res) => {
  let feedbacks = fs.readFileSync(`${basePath}/data/feedbacks.json`);
  feedbacks = JSON.parse(feedbacks);
  res.json({
    status: 'success',
    feedbacks
  });
})

// api to create a new feedback
router.post('/', (req, res) => {
  let feedbacks = fs.readFileSync(`${basePath}/data/feedbacks.json`);
  feedbacks = JSON.parse(feedbacks);
  let newFeedback = {
    id: Math.floor(Math.random()*10000),
    ...req.body
  }
  feedbacks.unshift(newFeedback);
  fs.writeFileSync(`${basePath}/data/feedbacks.json`, JSON.stringify(feedbacks));
  res.json({
    status: 'success',
    message: 'Added new feedback successfully'
  })
})

// api to update a feedback
router.patch('/:id', (req, res) => {})

// api to delete a feedback
router.delete('/:id', (req, res) => {})

module.exports = router;