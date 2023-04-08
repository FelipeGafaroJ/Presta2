const mysql = require('promise-mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '6cWRY1PUmiwYciQxJXkg',
  database: 'dloandb'
});

function getConnection() {
  return connection;
}

module.exports = { getConnection };