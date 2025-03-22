const express = require('express');
const mysql = require('mysql2');  // Ensure mysql2 is correctly imported

// Create an Express app
const app = express();
app.use(express.json());  // Middleware to parse JSON requests

// MySQL database connection
const db = mysql.createConnection({
  host: '192.168.137.207',       // Replace with your actual host (localhost if it's local)
  user: 'root',    // Replace with your MySQL username
  password: 'Moba@69420', // Replace with your MySQL password
  database: 'gift_recommendation'  // Replace with your database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database!');
});

// API to fetch all products from the database
app.get('/products', (req, res) => {
  db.query('SELECT * FROM gifts', (err, results) => {
    if (err) {
      console.error('Error fetching products:', err);
      res.status(500).json({ error: 'Failed to fetch products' });
    } else {
      res.json(results);  // Sends the products as a JSON response
    }
  });
});

// API to get product recommendations based on user input
app.post('/recommendations', (req, res) => {
  const { occasion, budget } = req.body;  // Extracting user input from request body

  db.query('SELECT * FROM products WHERE price <= ?', [budget], (err, results) => {
    if (err) {
      console.error('Error fetching recommendations:', err);
      res.status(500).json({ error: 'Failed to fetch recommendations' });
    } else {
      res.json(results);  // Sends the recommended products as a JSON response
    }
  });
});

// Start the Express server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
