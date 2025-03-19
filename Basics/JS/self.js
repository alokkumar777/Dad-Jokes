function isPalindrome(str) {
    let userString = str.split(" ").join("").toLowerCase();
    let reverseString = userString.split("").reverse().join("");
  
    if (userString == reverseString) {
      return `String is Palindrome`;
    } else {
      return `String is not Palindrome`;
    }
  }
  
  console.log(isPalindrome('A man a plan a canal Panama'));
  