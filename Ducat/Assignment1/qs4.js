// leap year or not
const prompt = require('prompt-sync')();

let year;
year = prompt('Enter a year: ');

if (year % 400 === 0 ) {
    console.log('Leap year')
} else if (year % 100 === 0) {
    console.log('Not a leap year')
} else if (year % 4 === 0) {
    console.log('Leap year')
} else {
    console.log('Not a leap year')
}