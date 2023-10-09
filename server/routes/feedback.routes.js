const express = require('express')
const router = express.Router();
const fs = require('fs');

const basePath = "/Users/ducnguyen/Documents/Personal/RikkeiAcademy/MD3/session07/server"

const checkExists = (req, res, next) => {
  const {id} = req.params;
  let feedbacks = fs.readFileSync(`${basePath}/data/feedbacks.json`);
  feedbacks = JSON.parse(feedbacks);
  let feedback = feedbacks.find(feedback => feedback.id === Number(id));
  if (!feedback) {
    res.status(404).json({
      error: 'Feedback not found'
    })
  } else {
    next();
  }
}

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
router.patch('/:id', checkExists, (req, res) => {
  const { id } = req.params;
  let feedbacks = fs.readFileSync(`${basePath}/data/feedbacks.json`);
  feedbacks = JSON.parse(feedbacks);
  let feedbackIndex = feedbacks.findIndex(feedback => feedback.id === Number(id));
  feedbacks[feedbackIndex] = {
    ...feedbacks[feedbackIndex],
    ...req.body
  }
  fs.writeFileSync(`${basePath}/data/feedbacks.json`, JSON.stringify(feedbacks));
  res.json({
    status: 'success',
    message: 'Feedback updated successfully'
  })
})

// api to delete a feedback
router.delete('/:id', checkExists, (req, res) => {
  const { id } = req.params;
  let feedbacks = fs.readFileSync(`${basePath}/data/feedbacks.json`);
  feedbacks = JSON.parse(feedbacks);
  let feedbackIndex = feedbacks.findIndex(feedback => feedback.id === Number(id));
  feedbacks.splice(feedbackIndex, 1);
  fs.writeFileSync(`${basePath}/data/feedbacks.json`, JSON.stringify(feedbacks));
  res.json({
    status: 'success',
    message: 'Feedback deleted successfully'
  })
})

module.exports = router;