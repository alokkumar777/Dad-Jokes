const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/product")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Oops Error!!", err);
  });

// normal way to create a schema
// const productSchema = new mongoose.Schema({
//   name: String,
//   price: Number,
//   inStock: Boolean
// });

// Minimal Product Schema with schema type
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    default: 0,
  },
});

const Product = mongoose.model("Product", productSchema);

// add product
function addProduct(prodName, prodPrice, prodStock) {
  const newProduct = new Product({
    name: prodName,
    price: prodPrice,
    stock: prodStock,
  });

  newProduct
    .save()
    .then((doc) => {
      console.log("Product inserted:", doc);
    })
    .catch((err) => {
      console.error("Insert failed:", err);
    });
}

async function insertProducts() {
  try {
    const products = [
      { name: "Laptop", price: 50000, stock: 10 },
      { name: "Mobile", price: 20000, stock: 25 },
      { name: "Headphones", price: 2000, stock: 50 },
    ];

    const result = await Product.insertMany(products);
    console.log("Products inserted successfully:", result);
  } catch (error) {
    console.error("Error inserting products:", error);
  }
}

async function deleteProduct(condition) {
  try {
    const result = await Product.deleteOne(condition);

    if (result.deletedCount > 0) {
      console.log("Product deleted successfully.");
    } else {
      console.log("No matching product found.");
    }
  } catch (error) {
    console.error("Error deleting product:", error);
  }
}

async function updateProduct(condition, updateData) {
  try {
    const result = await Product.updateOne(condition, { $set: updateData });

    if (result.matchedCount > 0) {
      if (result.modifiedCount > 0) {
        console.log("Product updated successfully.");
      } else {
        console.log("Product found but no changes made.");
      }
    } else {
      console.log("No matching product found.");
    }
  } catch (error) {
    console.error("Error updating product:", error);
  }
}

