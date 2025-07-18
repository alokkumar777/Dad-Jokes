const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// ejs template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Routes
app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/random", (req, res) => {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  res.render("random", { randomNum });
});

// pattern search
app.get("/search/:query", (req, res) => {
    const { query } = req.params;
    res.render("search", { query });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
