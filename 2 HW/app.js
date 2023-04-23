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



// 3. Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively

// 4. Write a JavaScript function to extract unique characters from a string.

// 5. Write a JavaScript function to find the first not repeated character.

// 6. Write a JavaScript program to pass a 'JavaScript function' as a parameter.

// 7. Write a JavaScript function to get the function name.


//prime divided only by 1 and itself 2, 3, 5, 