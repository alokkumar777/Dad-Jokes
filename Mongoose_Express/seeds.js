const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose
  .connect("mongodb://localhost:27017/farmStand")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const seedProducts = [
  { name: "Apple", price: 1.2, category: "fruits" },
  { name: "Banana", price: 0.8, category: "fruits" },
  { name: "Carrot", price: 0.5, category: "vegetable" },
  { name: "Broccoli", price: 1.0, category: "vegetable" },
  { name: "Milk", price: 2.5, category: "dairy" },
  { name: "Cheese", price: 3.0, category: "dairy" },
  { name: "Orange", price: 1.1, category: "fruits" },
  { name: "Spinach", price: 0.9, category: "vegetable" },
  { name: "Yogurt", price: 1.8, category: "dairy" },
  { name: "Strawberry", price: 2.2, category: "fruits" },
];

Product.insertMany(seedProducts)
  .then((docs) => {
    console.log("Documents inserted: ", docs);
  })
  .catch((err) => {
    console.error("Error inserting documents: ", err);
  });
