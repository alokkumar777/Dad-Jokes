// questiona

const prompt = require("prompt-sync")();

const pswd = prompt("Choose your password: ");
if (pswd.length >= 6) {
  console.log("Great! Strong password");
  if (pswd.indexOf(" ") !== -1) {
    console.log("But spaces are not allowed!");
  }
} else {
  console.log("Weak password!");
}
