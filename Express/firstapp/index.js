const express = require("express");
const app = express();
// console.dir(app);
const port = 3000;

// app.use((req, res) => {
//     res.send("<h1>Hello World</h1>");
// console.dir(res)
// });

app.get("/", (req, res) => {
  res.send("<h1>Hello this is home page now using nodemon</h1>");
});

app.get("/contact", (req, res) => {
  res.send("Contact page");
});

app.get(/(.*)/, (req, res) => {
  res.send("Found nothing");
});

app.listen(port, () => {
  console.log("LISTENING... ON PORT 3000");
});
