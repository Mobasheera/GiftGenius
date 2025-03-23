const express = require('express');
const mysql = require('mysql2');  
const cors = require('cors');

const app = express();
app.use(express.json());  
app.use(cors());

// ✅ Middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`🔍 Received ${req.method} request on ${req.url}`);
  next();
});

// ✅ Use Railway MySQL connection details instead of local MySQL
const db = mysql.createConnection({
  host: 'mysql.railway.internal',
  user: 'root',
  password: 'lSxhjCOrUJevgjYrnkRxZnqOBPljqotB',
  database: 'railway',
  port: 3306
});

// ✅ Check if MySQL connection is successful
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database!');
});

// ✅ Home route to check if server is running
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// ✅ API to fetch all products
app.get('/products', (req, res) => {
  db.query('SELECT * FROM gifts', (err, results) => {
    if (err) {
      console.error('Error fetching products:', err);
      res.status(500).json({ error: 'Failed to fetch products' });
    } else {
      res.json(results);
    }
  });
});

// ✅ API to get product recommendations
app.post('/recommendations', (req, res) => {
  const { occasion, budget } = req.body;
  
  db.query('SELECT * FROM gifts WHERE price <= ?', [budget], (err, results) => {
    if (err) {
      console.error('Error fetching recommendations:', err);
      res.status(500).json({ error: 'Failed to fetch recommendations' });
    } else {
      res.json(results);
    }
  });
});

// ✅ API to fetch products with pagination
app.get('/products_paginated', (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  const offset = parseInt(req.query.offset) || 0;

  db.query('SELECT * FROM gifts LIMIT ? OFFSET ?', [limit, offset], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Failed to fetch products' });
    } else {
      res.json(results);
    }
  });
});

// ✅ Start the Express server
const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
