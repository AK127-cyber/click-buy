const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rohit705022", // ← your MySQL root password
  database: "plantshop",   // ← your database name
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL database");
  }
});

// Login Route
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please provide both email and password",
    });
  }

  const sql = "SELECT * FROM signup WHERE email = ?";
  db.query(sql, [email], (err, result) => {
    if (err) {
      console.error("❌ SQL Error:", err);
      return res.status(500).json({
        success: false,
        message: "Login failed due to server error",
      });
    }

    if (result.length > 0) {
      const user = result[0];
      console.log("📥 Entered password:", password);
      console.log("🗄️ DB stored password:", user.password);

      if (password === user.password) {
        const isAdmin = user.role === "admin";
        return res.status(200).json({
          success: true,
          isAdmin,
          message: isAdmin ? "Admin Login Successful" : "User Login Successful",
        });
      } else {
        return res.status(401).json({
          success: false,
          message: "Invalid email or password (password mismatch)",
        });
      }
    } else {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
  });
});

// Signup Route
app.post("/api/signup", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please fill all fields",
    });
  }

  const checkUserSql = "SELECT * FROM signup WHERE email = ?";
  db.query(checkUserSql, [email], (err, result) => {
    if (err) {
      console.error("❌ Error checking existing user:", err);
      return res.status(500).json({
        success: false,
        message: "Server error during user check",
      });
    }

    if (result.length > 0) {
      return res.status(409).json({
        success: false,
        message: "User already exists with this email",
      });
    }

    const insertSql = "INSERT INTO signup (name, email, password, role) VALUES (?, ?, ?, ?)";
    db.query(insertSql, [name, email, password, "user"], (err, result) => {
      if (err) {
        console.error("❌ Error inserting user:", err);
        return res.status(500).json({
          success: false,
          message: "Signup failed due to server error",
        });
      }

      return res.status(201).json({
        success: true,
        message: "Signup successful",
      });
    });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
