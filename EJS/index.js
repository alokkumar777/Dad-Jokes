const express = require("express");
const path = require("path");
const avengersData = require("./data/data.json");

const app = express();
const PORT = 3000;

// Serve static files from node_modules
app.use(express.static("public"));


// pattern search
app.get("/search/:query", (req, res) => {
  const { query } = req.params;
  const data = avengersData[query];
  res.render("avengers", {...data, query });
});

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


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
