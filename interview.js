// 1. SCOPE VARIABLES

var a = 10;  // var can rediclared
var a = 100;
var a;       // you can declare and assign it later

let b = 30;  // you can NOT re-declaire let b
b = 50;      // but you can  declier and re-assign later

const d = 70; 
// d = 80; NO
// const d; ----> NO it would give you Type error, you need to give it a value
// not re-assign, not re-declare, you can NOT reuse const
//---------------------------------------------------------------------
// this is another reason why we write functions with const
/*
        const handelclick = () => {
            // USE ERROW FUNCTIONS MOSTLY !! AS MUCH AS POSSIBLE
        }
*/
// so you can not write another handelclick anywhere, in this file at least 
//---------------------------------------------------------------------
if (true) {
  // this is a block scope
  var a = 20;
  let b = 40;
  const d = 1000;
  console.log(b); //40

  // you can also have another block inside block
  {
    let b = 600;
    console.log("This is a different B: ", b) //600
  }
}


console.log("A is: ", a); // 20
console.log("B is: ", b); // 30
console.log("C is: ", d); // 70

// let scope changed this will be eccesable only this scope { } not from outside..
// if console.log is insice the scope then it will be // B-40, A-20, B-50
// !! LET is safer to use then VAR (u can be sure that outside b won't mess up inside b)

//---------------------------------------------------------------------

// 2. HOW DO WE CONCAT TWO ARRAYS?
let arr1 = [ 'red', 'green', 'blue']
let arr2 = ['black', 'white', 'yellow']

let arr3 = arr1.concat(arr2);
console.log(arr3)


let num1 = [1, 2, 3]
let num2 = [4, 5, 6]
let num3 = [7, 8, 9]

let num4 = num1.concat(num2, num3)
console.log("Number's arry: ", num4)


//The concat() method is used to merge two or more arrays.
//This method does not change the existing arrays, but instead returns a new array


//---------------------------------------------------------------------

// 3. USING SPREAD OPERATOR
let first = { x: 10, y: 20}
let second = {y: 40, z: 70}

let third = {...first, ...second}

console.log(third) // { x: 10, y: 40, z: 70 } when we have 2 y-s, first will be removed 

//---------------------------------------------------------------------

// 4. DESTRUCTUR
const tree = {
  value: 1,
  children: [
    { value: 2, children: [{ value: 3 }] },
    { value: 4, children: [{ value: 5 }] },
  ],
};
// output must be 1, 2, 3, 4, 5

const {
    value, 
    children: [
        { value: v2, children: [{value: v3}]},      // when you have repeated "value" we will save it like -> value: v2
        {value: v4, children: [{value: v5}]}        // same name property

]
} = tree
console.log(value, v2, v3, v4, v5);


//---------------------------------------------------------------------












/*
 * setTimeout
 * promies
 * guess output?
 * what are generator funtions?
 * what are ES6-7 features? promises
 * what is a latest ecma script?
 * what will you choose, why particular frame work used? what are differences between
 * what are rendering technics between this 3 (frameworks) 
 *  (rendering-server-side rendering and clint server rendering?)
 * disicion making?
 */