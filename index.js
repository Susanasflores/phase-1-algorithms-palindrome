function isPalindrome(word) {
//reverse the word
const reversedWord = word.split('').reverse().join('');
//compare original word with reversed word
if (word === reversedWord) {
  return true;
} else{
  return false;
}
}
isPalindrome("mom")
isPalindrome("table")
//write a function with one parameter/argument
//set a variable that will evaluate the reversed word.  It needs to be equal to the following:
//a reverse string(reverse method), prior to this, the string needs to be broken down into an array to separate the letters/elements for reverse.  Then use the join method to bring the array back together.
//use an if statement and analize input to be palindrome
//if this is so, return true
//if not palindrome, return false
/* 
  Add your pseudocode here(steps, inputs, outputs/data that should be returned)
*/
//set variable to equal separation of elements, reverse & bring elements back together
//write an if statement to check if input is palindrome
//if so, return true
//else, return false
/*
  Add written explanation of your solution here
*/
//set a variable that will evaluate the word backwards 
//write a function that will take a string as an input and evaluate if it is palindrome or not.  return true if it is and return false if it's not.  the string will be lower case.

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
