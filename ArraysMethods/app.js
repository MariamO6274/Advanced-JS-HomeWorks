// 1. toString()
// 2. join()
// 3. pop()
// 4. push()
// 5. shift()
// 6. unshift()


// 1. toString()
// The toString() Returns a string with array values separated by commas.

// And it does not change th original array

// array.toString() Syntax


let bikes1 = ['yamaha', 'Bajaj', 'Honda', 'TVS']
console.log(bikes1.toString()) //yamaha,Bajaj,Honda,TVS
console.log(' ')

//============================================================================

// 2. join()
// The join() returns a new string by concatenating all of the elements in
// an array separated by commas or a specified separator string.

// array.join(separator) Syntax

let bikes2 = ["yamaha", "Bajaj", "Honda", "TVS"];

console.log(bikes2.join()); // yamaha,Bajaj,Honda,TVS
console.log(bikes2.join("")); // yamahaBajajHondaTVS
console.log(bikes2.join("-")); // yamaha-Bajaj-Honda-TVS
console.log(' ')

//============================================================================

// 3. pop()
// The pop() method removes the last element of an array.
// and returns the removed element

// And this method changes the original array

// array.pop() Syntax

let bikes3 = ["yamaha", "Bajaj", "Honda", "TVS"];

console.log(bikes3.pop()) // TVS
console.log(bikes3) // [ 'yamaha', 'Bajaj', 'Honda' ]
console.log(' ')

//============================================================================

// 4. push()
// The push() method adds new item to the end of an array,
// and it's changes the length of an array

// returns the new length.

// array.push(item1, item2, ..., itemX) Syntax

let bikes4 = ["yamaha", "Bajaj", "Honda", "TVS"];
console.log(bikes4.push("Ducatti", "Royal Enfield")) // 6
console.log(bikes4) // [ 'yamaha', 'Bajaj', 'Honda', 'TVS', 'Ducatti', 'Royal Enfield' ]
console.log(' ')

//============================================================================

// 5. shift()
// The shift() removes first element and returns it

// array.shift() Syntax

let bikes5 = ["yamaha", "Bajaj", "Honda", "TVS"];
console.log(bikes5.shift()) // yamaha
console.log(bikes5) // [ 'Bajaj', 'Honda', 'TVS' ]
console.log(' ')

//============================================================================

// 6. unshift()
// The unshift() adds element to beginning and Returns new array length.

// array.unshift(item1, item2, ..., itemX) Syntax

let bikes6 = ["yamaha", "Bajaj", "Honda", "TVS"];
console.log(bikes6.unshift("BMW", "Ford")); // 6
console.log(bikes6); // [ 'BMW', 'Ford', 'yamaha', 'Bajaj', 'Honda', 'TVS' ]
console.log(' ')

//============================================================================

// 7. delete(operator)
// Array elements can be deleted using the JavaScript operator delete

// Using delete leaves undefined holes in the array

// delete array[index] Syntax

let fruits = ["banana", "apple", "grapes"]
delete fruits[1]
console.log(fruits) // [ 'banana', <1 empty item>, 'grapes' ]
console.log(' ')

//============================================================================

// 8. concat()
// The concat() method concatenates (joins) two or more arrays.
// returns a new array, containing the joined arrays

// This method does not change the existing arrays

// array1.concat(array2, array3, ..., arrayX) Syntax

let ary1 = [1, 2, 3];
let ary2 = [23,43,53];
let ary3 = [111, 12];

let ary_new = ary1.concat(ary2, ary3)
console.log(ary_new) // returns new array
// [ 1,  2,   3, 23, 43, 53, 111, 12 ]
console.log(' ')

//============================================================================

// 9. sort()
// The sort() sorts the elements of an array, and overwrites the original array.

// Sorts the elements as strings in alphabetical and ascending order.

// array.sort(compareFunction) Syntax

// sort() takes an optional compare function.

let arry = [99, 32, 23, 43, 53]
let str = ["zebra", "year", "van", "apple"]

arry.sort()
console.log(arry) // [ 23, 32, 43, 53, 99 ]

str.sort()
console.log(str) // [ 'apple', 'van', 'year', 'zebra' ]
console.log(' ')

//============================================================================

// 10. splice()
// The splice() method adds and/or removes array elements.

// The splice () method overwrites the original array

// array.splice(index, howmany, item1, ....., itemX) Syntax

let arrNum = [99, 32, 23, 43, 53, 100]
arrNum.splice(2,3,"a", "b", "c")
console.log(arrNum) //[ 99, 32, 'a', 'b', 'c', 100 ]
console.log(' ')

//============================================================================

// 11. slice()
// The slice() slice out a piece from an array, 
// it creates a new array

// array.slice(start, end); Syntax

 let numbers1 = [1, 2, 3, 4, 5, 6];
//let numbers1 = ["apple", "van", "year", "zebra", "man", "boy"]; //["van", "year", "zebra"];
let num2 = numbers1.slice(1, 4);
console.log(num2) // [ 2, 3, 4 ]
console.log(' ')

//============================================================================

// 12. reverse()
// The reverse() method reverses the order of the elements in an array

// This method overwrites the original array.

// array.reverse() Syntax
let numbers2 = [1, 2, 3, 4, 5, 6];
let string = ["A", "B", "C", "D"];

numbers2.reverse();
console.log(numbers2) // [ 6, 5, 4, 3, 2, 1 ]
string.reverse()
console.log(string) //[ 'D', 'C', 'B', 'A' ]
console.log(' ')

//============================================================================

// 13. isArray()
// The isArray() method returns true if an object is an array, otherwise false

// Check if an object is an array

// array.isArray(obj) Syntax

let numbers3 = [1, 2, 3, 4, 5, 6];
let string2 = "CodeBustler"

console.log(Array.isArray(numbers3)) // true
console.log(Array.isArray(string2)); // false
console.log(' ')

//============================================================================

// 14. indexOf()
// The indexOf() method returns the first index (position) of a specified value,
//of a specified value, returns -1 if the value is not found, and it searches from left to right.

// Negative sstart values counts from the last element (but still searches from left to right)

// array.indexOf(item, start) Syntax

let elements = ['laptop', 'HeadSet', 'Mobile', 'Router'];
console.log(elements.indexOf('Mobile', 0))  // 2
console.log(elements.indexOf('Mobile', 3))  // -1
console.log(' ')

//============================================================================

// 15. lastIndexOf()
// The  lastIndexOf() method returns the last index (position) of a specified value,
//returns -1 if the value is not found, starts at a specified index and 
//and searches from right to left.

// Negative start value counts from the last element
//(but still searches from right to left).

// array.lastIndexOf(item, start) Syntax

let elements2 = ["laptop", "Mobile", "HeadSet", "Mobile", "Router"];
console.log(elements2.indexOf('Mobile', 0))  // 1
// indexOf() : left to right

console.log(elements2.lastIndexOf("Mobile", 4));  // 3
// lastIndexOf() : right to left
console.log(' ')

//============================================================================

// 16. find()
// The find() method returns the first element in the provided array
//that satisfies the provided testing function.

// If no values satisfy the testing function, undefined is returned.

// find ((element) => {/*....*/}); Syntax (arrow function)

const arrray = [5, 12, 8, 130, 44];
const found = arrray.find((element) => element > 10);
console.log(found); // 12