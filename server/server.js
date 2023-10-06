const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors')
const feedbackRouters = require('./routes/feedback.routes');

const server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(morgan('dev'));
server.use(express.static("public"));
server.use(cors());
server.use('/api/v1/feedbacks', feedbackRouters);

server.get('/', (req, res) => {
  res.send("Hello World!");
})

server.listen(3000, () => {
  console.log('listening on port 3000');
})