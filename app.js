const express = require('express');
const app = express();
const connection = require('./db');

app.get('/gifts', (req, res) => {
  connection.query('SELECT * FROM gifts', (err, results) => {
    if (err) {
      res.status(500).send('Database query failed');
      return;
    }
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
