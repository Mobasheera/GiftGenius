const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Debug log to check if the server starts correctly
console.log("✅ Debug: Server is starting...");

// ✅ Middleware to log incoming requests (for debugging)
app.use((req, res, next) => {
  console.log(`🔍 Received ${req.method} request on ${req.url}`);
  next();
});

// ✅ Use Railway MySQL connection details (Uses pool for better stability)
const db = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQLHOST || "mysql.railway.internal",
  user: process.env.MYSQLUSER || "root",
  password: process.env.MYSQLPASSWORD || "lSxhjCOrUJevgjYrnkRxZnqOBPljqotB",
  database: process.env.MYSQLDATABASE || "railway",
  port: process.env.MYSQLPORT || 3306,
});

// ✅ Keep MySQL connection alive to prevent timeouts
setInterval(() => {
  db.query("SELECT 1", (err) => {
    if (err) console.error("❌ MySQL Keep-Alive Error:", err);
  });
}, 60000); // Runs every 60 seconds

// ✅ Home route to check if server is running
app.get("/", (req, res) => {
  res.send("✅ Server is running!");
});

// ✅ API to fetch all products
app.get("/products", (req, res) => {
  db.query("SELECT * FROM gifts", (err, results) => {
    if (err) {
      console.error("❌ Error fetching products:", err);
      res.status(500).json({ error: "Failed to fetch products" });
    } else {
      res.json(results);
    }
  });
});

// ✅ API to get product recommendations
app.post("/recommendations", (req, res) => {
  const { occasion, budget } = req.body;

  db.query("SELECT * FROM gifts WHERE price <= ?", [budget], (err, results) => {
    if (err) {
      console.error("❌ Error fetching recommendations:", err);
      res.status(500).json({ error: "Failed to fetch recommendations" });
    } else {
      res.json(results);
    }
  });
});

// ✅ API to fetch products with pagination
app.get("/products_paginated", (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  const offset = parseInt(req.query.offset) || 0;

  db.query(
    "SELECT * FROM gifts LIMIT ? OFFSET ?",
    [limit, offset],
    (err, results) => {
      if (err) {
        res.status(500).json({ error: "Failed to fetch products" });
      } else {
        res.json(results);
      }
    }
  );
});

// ✅ Start the Express server
const PORT = 3000; // Force port 3000 (since Railway expects this)
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server is running on port ${PORT}`);
  console.log("✅ Debug: Server should now be running.");
});
