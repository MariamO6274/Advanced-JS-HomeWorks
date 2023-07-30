// FUNCTIONS
// Q1 - What is a Function Declaration?

function square1(num) {
  return num * num;
}

// this is also can be called function definition or function statement

//---------------------------------------------------------------------------

// Q2 - What is Function Expression? - when you store function inside variable
const square2 = function (num) {
  return num * num;
};
console.log(square2(5)); // This is how we call

// this function doesn't have name so we are assighniing it to variable
/**
 * function (num) {
 *      return num * num
 * }
 *
 * this is an Anonymous function, no name (it can also be a callback)
 *
 * Function Declaration and Function Expression is basiclly same
 * difference is Function Declaration are assighned it to variable
 */

//---------------------------------------------------------------------------

//! Q3 - What are First Class Functions? - in a language where functions can be treated
// like a variable there functions are called
// first class functions, in this cases functions can
// be passed into another functions, can be used,
// manipulated and basicly what variable can do function can do

// Ex.

function square(num) {
  return num * num;
}

function displaySquare(fn) {
  console.log("Square is ", fn(5));
}
displaySquare(square);
// This is how powerful functions can be in JS, that we can pass them inside of another function
//just like a variable, and we can also manipulate and return them from that function.
//---------------------------------------------------------------------------

// Q4 - What is IIFE? - Immidatly Invoked Functions Exspressions instead of regular function call square3()
// we wrap everything in () and adding () we can pass arguments as well

(function square3(num) {
  console.log(num * num);
})(5);
// 25

//---------------------------------------------------------------------------

// Q5 - IIFE - O/P Based Question ?

// Ex. IIFE inside IIFE / clousers example

(function (x) {
  return (function (y) {
    console.log(x); // 1 sercheing x in inner scope, when doesn't find it, will search in its parent's scope
  })(2);
})(1);
// This happands bc of clouser..--> the ability of a function to access variables and functions that are
//lexically out of its scope are called clousers. Clousers are created whenevr a new function is created,
//bc function has a reference to its outer scope.
//---------------------------------------------------------------------------

// Q6 - Function Scope

// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope

//When we call this--> multiply() function, it's going to take num1 and num2 from 
//the global scope, bc they are defined in global scope not inside of this--> (multiply()) function.
//if there was a copy of these variables inside of the function, it would have taken that one.
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// Another EX of FUNCTION SCOPE
// A nested function example

//Keep in mind that we also have these variables outside of scope as well
//but these will shadow the global scope variables.
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`; // took name from global scope, num1 & num2 from local scope
  }

  return add();
}

console.log(getScore()); // "Chamakh scored 5"

//---------------------------------------------------------------------------

// Q7 - Function Scope  O/P Based Question ?

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

// every time this for loop runs, it creates another block scope for this function, let prints 0 1 2 3 4
// if we had var instead of let, var doesn't have block scope, var will print 5 5 5 5 5
// !!!! check Maurs videos
//---------------------------------------------------------------------------

// Q8 - Function Hoisting

// Functions are hoisted a bit differently then a normal variable does.
function functionName() {
  console.log("Roadside Coder");
}
functionName(); // if we move this up before function declaration, it will still work

/*
 * functionName();
 * 
 * function functionName() {
 *   console.log("Roadside Coder");
 * }
 * 
 */ // if we move call function it will still work

//---------------------------

// what happends in variable ?
var x = 5;
console.log(x) // if we move this before var x = 5, we'll get undefined bc of hoisting
// !!! Check execution creation phases, functions are copied to scope and variable is set to undefined
//---------------------------------------------------------------------------


// Q9 - Function Hoisting O/P Based Question ?
var x = 21;

var fun = function() {
    console.log(x) // undefined 
    var x = 20;
};

fun();

// Hoistin is a two step process 
// First it initializes the complete code, it'll initialize the global scope
// then it's gonna come to the local scope, when it initialize local scope,
// it's gonna first hoist this variable on top of the scope, we will alwayse refer to current scope
//---------------------------------------------------------------------------

// Q10 - Params vs Arguments

function squaree (num){ // Params --> receive Arguments in function
    console.log(num * num);
}
squaree("squaree", + 5); // values that we pass inside of here are --> Arguments


// EX
function multipply(numb1, numb2){
  console.log(numb1 * numb2);
}
var arrr = [5, 6] // when we need to pass array, will use spread operator
// multipply(5, 6) instead will go multipply(...arrr)

function multipply1(...nums) {    // Rest operator
  console.log(nums[0] * nums[1]);
}
var arrr = [5, 6];
multipply(...arrr);  // Spread operator

//---------------------------------------------------------------------------

// Q11 - Params vs Arguments - O/P Based Questions
// What would be the output of this EX?

const fn = (a, x, y, ...numbers) => {
  // Rest parameter must be last one so it can take rest of the numbers (arguments)
  console.log(x, y, numbers); // output: 6 3 [ 7, 8, 9 ]
};
fn(5, 6, 3, 7, 8, 9) // This will take 6 and 3 as x and y, and ...numbers will take remaing value

//---------------------------------------------------------------------------

// Q12 - What is a Callback Function? - It is a function passed into another function as an argument,
//which is then invoked inside the outer function to complete some kind of routine or action.

//function says that you can call me back whenever you like
// Give an example
// you can also use JS predefined functions such as: setTimeout, map,filter, reduce..

/**
 * document.addEventListiner("click", function(){
  // it takes 2 things
  // 1. "click"--> event, click event
  // 2. function(params)--> callback function
});
 */


// When we are passing a function inside of another function and this function is
//manipulated inside of this one(eventlistiner).

//---------------------------------------------------------------------------

// Q13 - Arrow functions - introduced in ES6, in some ways they work differently

// normal fn
const add1 = function (firstNum, secNum){
  return firstNum + secNum;
}

// Arrow fn
const add2 = (frNum, seNum) => {
  return frNum + seNum
}
// if this is only returning one line we can write it this way, looks much cleaner

const add3 = (fNum, sNum) => fNum + sNum;

console.log("This is a short way of Arrow function", add3(1,3))

// ! Arrow function VS Normal function
// 1. Syntax
// 2. Implicit "return" keyword --> get rid of it
// 3. Arguments
// EX
function func() {
  console.log(arguments)
}
func(1, 3, 2);  // [Arguments] { '0': 1, '1': 3, '2': 2 }
// we can not do this in arrow function it will give us an error
// 4. "this" keyword // Arrow fn does not have its own "this"
// EX
let user = {
  username: "Mariam",
  rc1: () => {
    console.log("This is an arrow fn " + this.username) // undefind bc it's pointing to global object
  },
  rc2() {
    console.log("This is normal fn " + this.username) // Mariam bc it's pointing to User object
  }
}
user.rc1()
user.rc2()