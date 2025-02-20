const prompt = require("prompt-sync")();

console.log("***** Check even or odd *****");
let userInput = Number(prompt("Input please: "));

if (userInput % 2 == 0) {
  console.log("Entered number is Even");
} else {
  console.log("Entered number is Odd");
}
