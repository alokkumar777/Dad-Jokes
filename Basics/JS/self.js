// Scope of a variable
// local
// global

// hoisting in JS

// lexical scope
// ----------------------------------------------------------------

// function definition
// myDeclare();

// function myDeclare(para1, para2, ...paraN) {
//     console.log('Function Definition');
// }

// function expression
// const myExpress = function(para1, para2, ...paraN) {
//     console.log('Function Expression');
// }

// myExpress();

// ----------------------------------------------------------------


//! higher order function
//* A function taking another function as argument
//? Example
// function cookPizza(order, callback) {
//     console.log(`Cooking ${order}`);
//     callback()
// }

// function serverPizza() {
//     console.log(`Order is ready!`);
// }

// cookPizza('Pepperoni', serverPizza);

// ----------------------------------------------------------------


//* A function returns a function
//? Example
// function deliveryGuy(name) {
//   return function (order) {
//     console.log(`${name} is deliver your ${order}`);
//   };
// }

// const john = deliveryGuy("John");
// console.log(john);
// john("Margherita");

// ----------------------------------------------------------------

