const express = require('express');
const connection = require('./db');  // Import the database connection
const app = express();

// Middleware to parse incoming JSON (if needed in POST requests later)
app.use(express.json());

// Create a route to fetch all gifts from the database
app.get('/get-gifts', (req, res) => {
    const query = 'SELECT * FROM gifts';  // SQL query to fetch data from the "gifts" table
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error querying the database:', err);
            return res.status(500).json({ error: 'Database query error: ' + err.message });
        }
        res.json(results);  // Send the results as a JSON response
    });
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
