const prompt = require("prompt-sync")();

// taking input
let input1 = Number(prompt("Input1 (Any number): "));
let input2 = Number(prompt("Input2 (Any number): "));
// condition checking
if (input1 != input2) {
  // show result
  console.log(`${input1}-Input1 is not equal to ${input2}-Input2`);
} else {
  console.log(`${input1}-Input1 are equal to ${input2}-Input2`);
}
