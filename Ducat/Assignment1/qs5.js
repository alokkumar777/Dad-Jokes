const prompt = require('prompt-sync')();

console.log('******* Menu *******')
let userInput = Number(prompt('Enter your choice: '))

switch (userInput) {
    case 1:
        console.log('Pasta - ₹200')
        break;
    case 2:
        console.log('Coffee - ₹150')
        break;
    case 3:
        console.log('Burger - ₹100')
        break;
    default:
        console.log('Invalid choice')
}
