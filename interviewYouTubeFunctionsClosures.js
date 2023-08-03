// CLOSURES
// Closure - is a function that references variables in the outer scope from
//inner scope.

// What is lexical scope? - Scope refers to the current context of your code.
//it can be eather globally or locally defined.

// Lexical scope - means that a variable defined outside a function
//can be accessible inside of anoather function defined after a variable declaration.
//But opposite is not true.(variable difined inside function can not be accesible outside that function)

var userName = "Mariam";

// global scope
function local() {
  // local scope
  console.log(userName);
}
local(); // Mariam
// bc the variable defiend outside of this function can be accessible inside of this function scope.
// This is a lexical scope

// EX. 2
// global scope
function subscribe() {
  var myName = "Marii";
  // inner scope 2
  function displayName() {
    // inner scope
    console.log(myName);
  }
  displayName();
}
subscribe();

// We have 3 scopes in here
// when we call --> subscribe() it's going to initialize this function (line27-34) with this name Marii
//and when we go inside of this function --> displayName(), this --> myName will be still accessible
//inside of this function, bc it's outside of this local scope. and this is a CLOUSER

// In this case displayName() is a clouser.

//============================== !!!

// FUNCTION RETURNS A FUNCTION AND INNER FUNCTION HAS ACCESS TO OUTER FUNCTIONS VARIABLE
// A closure is where an inner function has access to the outer function's variables.

// A closure has three scope chains. We call them scope chains because JavaScript
//starts looking for where to find a variable in this specific order:

// 1. Variables in their own scope (variables defined between the curly braces of a function).
// 2. Variables defined in the outer function's scope.
// 3. Variables defined in the global scope.

//============================== !!!
// EX. 3
function makeFunc() {
  const name = "Mozilla"; // local variable
  function displayName() {
    // inner function called display name
    console.log(name);
  }
  return displayName;
}
const myFunc = makeFunc();
myFunc();

//const myFunc = makeFunc(); // we are calling makeFuncion and taking whatever it's returning us
//myFunc(); // it is returning us displayName()

// When we call myFunc() it will execute this -->displayName() function
//and still going to access its outer variable -->const name = "Mozilla";

// when we returning we are saving result in variable myFunc, we also could just call
// line-64 displayName(); and line-66 makeFunc(); also like this--> makeFunc()();

console.log("---------------------");

//==============================================================================

// CLOUSERE SCOPE CHAIN

/*  Every closure has three scopes:

    1)  Local scope (Own scope)
    2)  Enclosing scope (can be block, function, or module scope) outer function's scope
    3)  Global scope
*/

var lastN = "Ostat";
function both() {
  var midN = "mar";
  function displayBoth() {
    console.log(midN, lastN);
  }
  return displayBoth;
}
both()();

// What's the use of it? - Clousers make it possible for a function
// to have private variables.

//------------------------------------------------------

/// myself
// EX. 4
var lastName = "Ostatishvili"; // global variable // global scope
function displayMyName() {
  // outer function // outer function scope
  var firstName = "Mariamo"; // local variable
  function fullName(age) {
    // inner function
    console.log(firstName, lastName, age); // // local scope
  }
  return fullName;
}
displayMyName()(35); // we can alos pass somthing here
//------------------------------------------------------

// SCOPE CHANES
// EX. 5

// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20

// we have anonymus functions nested to each other
// a = 1, b = 2, c = 3, d = 4, e = 10

//------------------------------------------------------

// var lastName = "Ostatishvili"
// function fullName(){ // outer function
//     var myName = "Mariam" // local variabke
//     function displayMyName(){ // inner function here
//         console.log(myName, lastName)
//     }
//      displayMyName();
// }
// // const result = fullName();
// // result();
// fullName();

// var lastName = "Ostat" // gloabl var
// function fullName(){ // oter fn
//     var myName = "Marmar" // local var
//     function displayName(){ // inner fn
//         console.log(myName, lastName);
//     }
//     return displayName;
// }
// //fullName()();
// const result = fullName();
// result()

// CLOUSERS
// FUNCTION RETURNS A FUNCTION AND INNER FUNCTION HAS ACCESS TO OUTER FUNCTIONS VARIABLE

var student2 = "Jack";
function students() {
  // outer function
  var student1 = "Tom"; // local variable
  function displayName() {
    // inner function
    console.log(student1 + " and " + student2);
  }
  return displayName;
}
//students()();
const result = students();
result();

// CLOUSERE SCOPE CHAIN

/*  Every closure has three scopes:

    1)  Local scope (Own scope)
    2)  Enclosing scope (can be block, function, or module scope) outer function's scope
    3)  Global scope
*/

console.log("---------------------");

//==============================================================================

// INTERVIEW QUESTIONS about CLOUSER

// Ques 1: What will be logged to console?

let count = 0;
(function printCount() {
  if (count === 0) {
    // 217-220 block scope
    let count = 1; // shadowing (inside block only- so outside count is still 0)
    console.log(count); // 1
  }
  // count is still = 0 (here outside)
  console.log(count); // 0
})();
// 1
// 0
console.log("---------------------");

// Ques 2: Write a function that would allow you to do this

function createBase(num) {
  return function (innerNum) {
    // anonymous function
    console.log(num + innerNum);
  };
}
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
// you can create a closure to keep the value passed to a function--> createBase
//even after the inner function is returned
console.log("---------------------");

// Ques 3: Time Optimization

// we have a very log loop, which runs million times
function find() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    // this value is same for each and every time we call function
    a[i] = i * i; // assigning i to each of the index of this array
  }
  //so we'll create a function here (anonymouse function) which will take clg,, and pass index here instread of fimd
  return function (index) {
    console.log(a[index]); // watever index that we provide. // we provide 6 (bottom)
  };
}
// create const clouer, which will have find (created inner function)
const clouser = find();
//after
console.time("6");
clouser(6);
console.timeEnd("6"); // 6: 0.143ms
console.time("50");
clouser(50);
console.timeEnd("50"); // 50: 0.025ms

//before  --> huge time change
// console.time('6')
// find(6)
// console.timeEnd('6'); // 6: 9.706ms
// console.time('50');
// find(50)
// console.timeEnd('50') // 50: 8.539ms

// clousers can help us optimzed time
console.log("---------------------");

// Ques 4: Block scope and setTimout

for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged? 3, 3, 3 bc of var (in 1 sec interval)
  }, 1000);
}
// var does NOT have a black scope, var has a function scope
// first time it runs, var's value is 0 but won't be printed,
// bc set timeout only runs after complete code has run successfully.
// we have i-0, i-1, i-2, i-3 but when we come out of this loop and
// setTimeout has finished it's time and now our JS engine is going to print all of theses values.
// last time engine encountered the value of i, it was 3

// JS engine is referring to the current value of i. current value was 3 --> 3, 3, 3
// use Let instead ! --> 0, 1, 2  let is a block scope

// How to do this with clousers using var, get output 0, 1, 2
for (var i = 0; i < 3; i++) {
  function inner(i) {
    // create clouser here and pass i- local variable, put setTimout inside clouser
    setTimeout(function log() {
      console.log(i);
    }, i * 1000);
  }
  inner(i); // and call this clouser and pass i
}
// Everytime  this i is passed to this function, it is not going to reference that
// particular memory value. It's going to create a whole different memory space for this function
// evrytime this loop runs.
console.log("---------------------");

// Ques 5: How would you use a clouser to create a private counter?

// What is a private counter?
function counter() {
  var _counter = 0; // underscore bc this is a convention when we create private variables

  function add(increamnet) {
    _counter += increamnet;
  }
  function retrive() {
    return "Counter = " + _counter;
  }

  return {
    add,
    retrive,
  };
}

// Let's initialize this counter
const c = counter(); // this has created a new counter, a private counter
c.add(5); // provice a value let's say 5, it will add 5 to the counter
c.add(10); // counter should be 15, let's call retrive and check
console.log(c.retrive());

// We are NOT directly manipulating the couunter,
// we are using these functions (add and retrive) to manimpulate the value of this private variable/ private counter
console.log("---------------------");

// Ques 6: What is MOdule Pattern?

var Module = (function () {
  function privateMethod() {
    // do something
    console.log("Private");
  }
  return {
    publicMethod: function () {
      // can call privateMethod();
      console.log("Public");
    },
  };
})();

// We have an IIFE right here and private function inside of it,
// and public function which we are returnong to the user.
// we can write a code inside public function, which can call this private method

// Private functions are NOT returned, NOT returning these functions makes them inaccessible
// outside of the module namespace. But our public function can access our private functions

Module.publicMethod(); // Public
// Module.privateMethod(); // Error--> TypeError: Module.privateMethod is not a function
console.log("---------------------");

// Ques 7: Make this run only once

let viewTest;
function likeVideoo() {
  view = "Roadside Coder";
  console.log("Subscribe to ", viewTest);
}
likeVideoo();
// likeVideoo(); this will call this function as many times, we need only once using clouser
// likeVideoo();
// likeVideoo();

// We have declared view variable outside, and we are initializing it inside of our function
var view; // ვიდეოში აქვთ let ჩემტან არ იმუშავა
function likeVideo() {
  let called = 0; // we created local scope, and evrytime we call this,it reference to same called variable
  return function () {
    if (called > 0) {
      console.log("Already Subscribed");
    } else {
      view = "Roadside Coder";
      console.log("Subscribe to ", view);
      called++;
    }
  };
}
let isSubscribed = likeVideo();

isSubscribed();
isSubscribed();
isSubscribed();


console.log("---------------------");
// Other ways
// Ques 8: Once Polyfill 

function once(func, context) {
  let ran; // local variable to determine is this function has been ran once or not

  return function() { // clouser anonymus function which will be returned end of code hello()
    if(func) {
      // checking if function has some value,(it has this ()=> console.log("Hello")) and we run this this
      // after run it's going to have result inside this ran variable,
      // function will be null, so that we can NOT run it again (u can also provide arguments like--> hello(1,2);)
      ran = func.apply(context || this, arguments);
      func = null;
    }
    return ran;
  }

}
const hello = once(()=> console.log("Hello"));

hello();
hello();
hello();
console.log("---------------------");

// Ques 9: Memoize Polyfill

// What is Memoize? - store value that were calculated previously,
//optimazation technique to reduce complexity of the application.

function myMemoize(fn, context) {
  const res = {};
  return function (...args){
    var argsCache = JSON.stringify(args);
    if(!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache]
  }
}

const clumsyProduct = (num1 , num2) => {
  for (let i = 1; i <= 100000000; i++) {}
  return num1 * num2
}

const memoizedClumzyProduct = myMemoize(clumsyProduct);

console.time('First call');
console.log(memoizedClumzyProduct(9476, 7649));
console.timeEnd('First call') // First call: 48.606ms

console.time("Second call");
console.log(memoizedClumzyProduct(9476, 7649));
console.timeEnd("Second call"); // Second call: 0.031ms
console.log("---------------------");

// Ques 10: Difference between Closure and Scope

// Whenever you create a function within another function, then inner function is the clouser
// This clouser is usually returned, and we can use outer functions variable ar a later time.

// Whereas a scope in JavaScript defines whaat variable you have access to.
// There are 2 kinds of scope--> Global scope and Local scope.

// IN case of Clousers there are 3 --> Global scope, Outer scope and Local scope.