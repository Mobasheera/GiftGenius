const mysql = require('mysql2');  // Use mysql2 instead of mysql

const connection = mysql.createConnection({
  host: '192.168.137.207',    // Railway provided host
  user: 'root',                      // Railway provided username
  password: 'Moba@69420', // Railway provided password
  database: 'gift_recommendation',               // Railway provided DB name
  port: 3306                   // Railway provided port, no quotes needed for port
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

module.exports = connection;
