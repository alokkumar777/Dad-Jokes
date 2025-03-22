// const prompt = require("prompt-sync");

// Ask user what to perform
// 1. new
// 2. list
// 3. del
// 4. quit

console.log(`
  *****************************************
  Type the following to perform some action
  - New : For new task
  - List : To see the list of task
  - Delete : To del a task
  - Quit : For quit the app
  *****************************************
  `);

let taskList = [];
// console.log(userInput);

while (true) {
  let userInput = prompt("What you want to perform?").toLowerCase();
  // first case
  if (userInput === "new") {
    let task = prompt("Add your task");
    taskList.push(task);
    console.log("Task added");
    // second case
  } else if (userInput === "list") {
    for (let [index, tasks] of taskList.entries()) {
      console.log(`${index}: ${tasks}`);
    }
    // third case
  } else if (userInput === "delete") {
    let enterIndex = prompt("Enter index of task to delete");
    taskList.splice(enterIndex, 1);
    console.log("Tasked deleted");
  } else if (userInput === "quit") {
    console.log("Quiting app");
    break;
  } else {
    alert("Enter valid input! Try again.");
  }
}
