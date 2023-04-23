//April 20, 2023
// 1) Task

// Write a function whitch takes a sentence as an input
// example: my name is mariam
// output: My Name Is Mariam

const myName = "my name is mariam";
const arr = myName.split(" ");

for (var i = 0; i < arr.length; i++) {
  arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}

const newName = arr.join(" ");
console.log(newName);

// 2) Task

// Question: Given an array with same duplicated elements
// Out expected: Remove all the duplicate elements and keep unique entries
// Example: input array = [2,4,5,6,2,9,4,2,7]
// Expected output = [2,4,5,6,7,9]

var array = [2, 4, 5, 6, 2, 9, 4, 2, 7];

function removeDupli(array) {
  return array.filter((item, index) => array.indexOf(item) === index);
}

console.log(removeDupli(array));

/////////////////////////////////////////////////////////

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
console.log(myString("My name is Mariamooo"));


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

// ////
// var e_arr = [2, 4, 5, 6, 2, 9, 4, 2, 7];
// var myUniqueElemSet = new Set();
// e_arr.forEach((elem) => {
//   myUniqueElemSet.add(elem);
// });
// console.log("myUnique Elements Set: ", myUniqueElemSet);
