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
