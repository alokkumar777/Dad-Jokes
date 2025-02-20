const prompt = require("prompt-sync")();

console.log("***** Check +(ve) or -(ve) *****");
let userInput = Number(prompt("Input please: "));

if (userInput < 0) {
  console.log("Entered number is -ve");
} else if (userInput == 0) {
    console.log("0 is neither +ve nor -ve");
} else {
  console.log("Entered number is +ve");
}
