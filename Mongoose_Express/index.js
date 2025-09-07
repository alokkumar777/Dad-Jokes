const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const Product = require("./models/product");
// Server setup
const app = express();
const PORT = 3000;

// Connection to mongoDB
mongoose
  .connect("mongodb://localhost:27017/farmStand")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/products/new", (req, res) => {
  res.render("products/new");
});

app.post("/products", async (req, res) => {
  const { name, price, category } = req.body;
  const newProduct = new Product({ name, price, category });

  await newProduct.save();
  res.redirect("/products");
});

app.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.render("products/index", { products });
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("products/show", { product });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
