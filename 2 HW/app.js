// Date : 22 April 2023

// 1. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.

function myString(str) {
  var words = str.split(" ");
  var longest = " ";
  words.forEach((word) => {
    if (word.length > longest.length) {
      longest = word;
    }
  });
  return longest;
}
console.log(myString("My name is Mariamii"));

// function findLongestWord(str) {
//   var strSplit = str.split(" ");
//   var longestWord = 0;
//   for (var i = 0; i < strSplit.length; i++) {
//     if (strSplit[i].length > longestWord) {
//       longestWord = strSplit[i].length;
//     }
//   }
//   return longestWord;
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");

//------------------------------------------------------------------------------------

// 2. Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not.

const prime = (n) => {
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
console.log(prime(7)); //check 

//------------------------------------------------------------------------------------

// 3. Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively

//------------------------------------------------------------------------------------

// 4. Write a JavaScript function to extract unique characters from a string.

function extractUnique(str) {

  var uniqueCharacter = " ";

  for (let i = 0; i < str.length; i++) {
    if (uniqueCharacter.indexOf(str.charAt(i)) < 0) {
      uniqueCharacter += str[i];
    }
  }
  return uniqueCharacter;
}
console.log(extractUnique("aabbccddkk"));


// function findUnique(str) {
//   // The variable that contains the unique values
//   let uniq = "";

//   for (let i = 0; i < str.length; i++) {
//     // Checking if the uniq contains the character
//     if (uniq.includes(str[i]) === false) {
//       // If the character not present in uniq
//       // Concatenate the character with uniq
//       uniq += str[i];
//     }
//   }
//   return uniq;
// }

// console.log(findUnique("Geeksforgeeks"));

//------------------------------------------------------------------------------------

// 5. Write a JavaScript function to find the first not repeated character.

// 6. Write a JavaScript program to pass a 'JavaScript function' as a parameter.

// 7. Write a JavaScript function to get the function name.


