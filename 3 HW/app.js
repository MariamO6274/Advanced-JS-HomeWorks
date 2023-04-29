// Statements
// 1. Write a function which returns another function

function a() {
  function b() {
    console.log("return function in another function");
  }

  // var result = b;
  // return result;
  return b;
}

// 2. Create a JS object which has variables and functions
//     a. There should be at least 1 arrow function and 1 normal function
//     b. (Intermediate) The normal function should contain at least 1 arrow function and 1 normal function inside it

var myObject = {
  myName: "Mariam",
  lastName: "Ostatishvili",
  age: 34,
  fullName: function () {
    return `${this.myName} ${this.lastName}`;
  },
  arrowFunc: () => {
    console.log("arrow function in object");
  },

  address: {
    state: "Colorado",
    city: "Denver",
    Counrty: "USA",
  },
};
console.log(myObject.fullName());

// 3. Write a function 'add' which takes 2 arguments and returns the sum of the 2 numbers.
// addition

function add(x, y) {
  return x + y;
}
console.log(add(4, 4));

// 4. Write a function 'calculate' that takes an input a operation (+,-,*,/), which returns another function as per operation argument.

var calculate = function (cal) {
  var a = 10;
  var b = 4;
  var output = cal(a, b);
  console.log(output);
};
calculate(add);

//subscribe
function sub(x, y) {
  return x - y;
}
console.log(sub(10, 5));

//multiplication
function mult(x, y) {
  return x * y;
}
console.log(mult(1, 6));

//devision
function dev(x, y) {
  return x / y;
}
console.log(dev(20, 5));

