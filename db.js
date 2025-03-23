const mysql = require("mysql2"); // Use mysql2 instead of mysql
const dotenv = require("dotenv");
dotenv.config();

const connection = mysql.createConnection({
  host: "mysql.railway.internal", // Railway provided host
  user: "root", // Railway provided username
  password: "lSxhjCOrUJevgjYrnkRxZnqOBPljqotB", // Railway provided password
  database: "railway", // Railway provided DB name
  port: 3306, // Standard MySQL port (not 'root')
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to the MySQL database.");
});

module.exports = connection;
