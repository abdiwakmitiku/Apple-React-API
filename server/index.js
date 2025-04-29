// Import Modules
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

// Create an Instance of Express
const app = express();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("The Server is Running");
});

// Create a SQL Connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "myDBuser",
  password: "myDB",
  database: "myDB",
});

// Connect to MySQL Database
connection.connect((err) => {
  if (err) {
    console.log("Database connection failed: ", err);
  } else {
    console.log("Database is connected.");
  }
});

// Get all iPhones
app.get("/iphones", (req, res) => {
  connection.query(
    `SELECT * 
     FROM products 
     JOIN discription ON products.Product_id = discription.Product_id 
     JOIN price ON products.Product_id = price.Product_id`,
    (err, rows, fields) => {
      if (err) {
        console.log("SQL Error:", err.sqlMessage);
        res.status(500).send("Error fetching data from database.");
      } else {
        res.json({ Products: rows });
      }
    }
  );
});


// Start Server
app.listen(2025, () => {
  console.log("Server is running on http://localhost:2025");
});
