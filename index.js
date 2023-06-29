function isPalindrome(word) {
  // Write your algorithm here. 
  //Define a function named isPalindrome that takes a string as an argument.
//Convert the string to lowercase and store it in a variable.
// Initialize two variables, one at the start of the string and one at the end of the string.
//Loop through the string until the two variables meet in the middle.
//If the characters at the two variables are not equal, return false.
//If the loop completes without returning false, return true.

}

/* 
  Add your pseudocode here
*/
//FUNCTION isPalindrome(string)
//SET str = string.toLowerCase()
//SET start = 0
//SET end = str.length - 1
//WHILE start < end
   // IF str[start] != str[end]
       // RETURN false
    //END IF
    //INCREMENT start
   // DECREMENT end
//END WHILE
//RETURN true
//END FUNCTION

/*
  Add written explanation of your solution here
*/function reverseString(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  const reversedWord = reverseString(word);
  return word === reversedWord;
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
