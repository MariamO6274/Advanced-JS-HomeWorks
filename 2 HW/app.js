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

function secLowestGreatest(arr) {
  arr.sort();

  var num = arr.length;
  var lowest = arr[1];
  var greatest = arr[num - 2];

  console.log(`Second lowest is ${lowest} and second greatest is ${greatest}`);
}
secLowestGreatest([1, 2, 3, 4]);

// function Second_Greatest_Lowest(arr_num) {
//   arr_num.sort(function (a, b) {
//     return a - b;
//   });
//   var uniqa = [arr_num[0]];
//   var result = [];

//   for (var j = 1; j < arr_num.length; j++) {
//     if (arr_num[j - 1] !== arr_num[j]) {
//       uniqa.push(arr_num[j]);
//     }
//   }
//   result.push(uniqa[1], uniqa[uniqa.length - 2]);
//   return result.join(",");
// }

// console.log(Second_Greatest_Lowest([1, 2, 3, 4, 5]));

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


//we create an array of all the characters, by splitting on anything.
//Then, we loop through each character, and we filter the array we created,
//so we'll get an array of only those characters.
//If the length is ever 1, we know we have a non-repeated character.

var firstNonRepeatedCharacter = function (string) {
  var chars = string.split("");
  for (var i = 0; i < string.length; i++) {
    if (
      chars.filter(function (j) {
        return j == string.charAt(i);
      }).length == 1
    )
      return string.charAt(i);
  }
};

// function firstNotRepeated(str) {
//   var arrr = str.split("");
//   var result = "";
//   var ctr = 0;

//   for (var i = 0; i < arrr.length; i++) {
//     ctr = 0;

//     for (var y = 0; y < arrr.length; y++) {
//       if (arrr[i] === arrr[y]) {
//         ctr += 1;
//       }
//     }

//     if (ctr < 2) {
//       result = arrr[i];
//       break;
//     }
//   }
//   return result;
// }
// console.log(firstNotRepeated("abacddbec"));

//------------------------------------------------------------------------------------

// 6. Write a JavaScript program to pass a 'JavaScript function' as a parameter.

// 7. Write a JavaScript function to get the function name.
