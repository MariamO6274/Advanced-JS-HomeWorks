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

// Q3 - What are First Class Functions? - in a language where functions can be treated
// like a variable there functions are called called
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

//---------------------------------------------------------------------------

// Q6 - Function Scope

// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`; // took name from global scope, num1 & num2 from local store
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
// if we had var instead of let, var doesn't have lock scope, var will print 5 5 5 5 5
//---------------------------------------------------------------------------

// Q8 - Function Hoisting
function functionName() {
  console.log("Roadside Coder");
}
functionName(); // if we move this up before function declaration, it will still work

// what happends in variable ?
var x = 5;
console.log(x) // if we move this before var x = 5, we'll get undefined bc of hoisting
//---------------------------------------------------------------------------

// Q9 - Function Hoisting O/P Based Question ?
var f = 21;

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

function squaree (num){ // Params
    console.log(num * num);
}
squaree("squaree", + 5); // Arguments
//---------------------------------------------------------------------------

// Q11 - Params vs Arguments