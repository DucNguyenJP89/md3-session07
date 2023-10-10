const mysql = require('mysql2');

const pool = mysql.createPool({
  user: 'root',
  password: 'love4389',
  database: 'session07_feedbacks',
  port: 3306
})

module.exports = pool.promise();