//April 23, 2023

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
secLowestGreatest([1, 2, 3, 4, 5, 6]);

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

//------------------------------------------------------------------------------------

// 5. Write a JavaScript function to find the first not repeated character.

var firstNotRepeated = function (string) {
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
console.log(firstNotRepeated("abafcddbec"));

//------------------------------------------------------------------------------------

// 6. Write a JavaScript program to pass a 'JavaScript function' as a parameter.

// function welcome() {
//   return "Welcome to out class";
// }
///////////
// function welcome() {
//   var hello = "Hello";

//   function dispName() {
//     console.log(hello);
//   }
//   dispName();
// }
// welcome();

//------------------------------------------------------------------------------------

// 7. Write a JavaScript function to get the function name.
function functionName() {
  return functionName.caller.name;
}

function printFuncName() {
  console.log(functionName());
}

printFuncName();
//========================================

//Clouser

function outer1 (){
  var num = 10;

  function inner1() {
    var num2 = 20;
    return num2;
  }
  var j = inner1()
  return j; 
  
}

var i = outer1();
// console.log(i);

//////

function outer(){
  var num = 10;

  function inner() {
    var num2 = 20;
    return num2;
  }
return inner;
  
}

var i = outer();
 console.log(i);