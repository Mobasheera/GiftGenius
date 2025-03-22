const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());  // Allows the server to accept JSON data

// MySQL database connection
const db = mysql.createConnection({
    host: '192.168.137.207',
    user: 'root',
    password: 'Moba@69420',
    database: 'gift_recommendation'
  });

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database!');
  }
});

// API to fetch all products
app.get('/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) {
      console.error("Error fetching products:", err);  // Log the error message
      res.status(500).json({ error: 'Failed to fetch products' });
    } else {
      res.json(results);  // Send the result as a JSON response
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
