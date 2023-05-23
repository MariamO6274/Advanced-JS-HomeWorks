/*
  
Prototypes
call apply bind
Promises
Closures
'this' keyword

 */

// Prototypes
// Saves memory space

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

Person.prototype.fullName = function () {
  console.log("My friends name is " + this.firstName + " " + this.lastName + " and he is " + this.age + " years old.");
};


//=================================================================================

//Promises
/**
 * promises offer a mechanism to handle the outcomes of an asynchronous action in a more streamlined and controlled manner. 
 * Additionally, they make it easier to handle errors in a consistent way and chain several asynchronous tasks together.
 * 
 * In using JavaScript promises, the “promise” object is a constructor that creates a new promise and takes a single argument,
 * which is a function called the "executor". The executor function takes two parameters,
 * “resolve” and “reject” which can be used to indicate whether the asynchronous operation has succeeded or failed.
 */

const promise = new Promise((resolve, reject) => {
  // some asynchronous operation
  if (success) {
    resolve(value);
  } else {
    reject(error);
  }
});

/**
 * Once a promise is created, you can use its “then” method to attach callbacks that will be invoked when the promise is resolved,
 * and its “catch” method to attach callbacks that will be invoked when the promise is rejected.
 */

//=================================================================================


//Async/await
/**
 * Async/await offers a technique for creating asynchronous code with synchronous appearance and behaviour.
 * 
 * An asynchronous function is defined by the “async” keyword.
 * The asynchronous function can then yield a promise and use the “await” keyword to delay code execution while it waits for the promise to be fulfilled.
 */

// const getData async() => {
//     const response = await fetch('https://some-api.com/data');
//     const data = await response.json();
//     return data;
// }

/**
 * In the code above, “fetch” is an asynchronous function that returns a promise
 * and the “await ” keyword is used to wait for the promise to resolve before parsing the JSON data.
 * 
 * async/await complements promises, not replaces them.
 * 
 * It still relies on promises to handle the async flow internally.


 */

//"this" keyword