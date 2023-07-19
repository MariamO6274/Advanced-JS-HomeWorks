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