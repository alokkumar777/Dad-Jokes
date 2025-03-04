function isArmstrongNumber(num) {
  let sum = 0;
  let temp = num;
  const numberOfDigits = num.toString().length;

  while (temp > 0) {
    let digit = temp % 10;
    sum += Math.pow(digit, numberOfDigits);
    temp = Math.floor(temp / 10);
  }

  return sum === num;
}

const number = 144;
if (isArmstrongNumber(number)) {
  console.log(`${number} is an Armstrong number.`);
} else {
  console.log(`${number} is not an Armstrong number.`);
}

