// CURRYING
// Curring - is a function that takes one argument at a time and returns
// a new function expecting the next argument.

// It is a conversion of functions from callable as this f(a,b) into callable as this f(a)(b).
// and curried functions are constructed by immediately returning thier inner functions
// simultaneously.

// Example f(a,b) into f(a)(b)

function f(a) {
  // currying takes ONE argument at a time, and returns a new function expecting the next argument
  return function (b) {
    //console.log(a,b)
    return `${a} ${b}`;
  };
}
console.log(f(5)());
// This is how we can convert a normal function into a function which is carried
console.log("---------------------");

// Quesestion - Why should we use currying? - to avoid passing same variables again and again,
// - to create higher order functions, - to make your function pure and less prone to errors.

// Question 1 - sum(2)(6)(1)

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(sum(2)(6)(1)); // 9
console.log("---------------------");

// Quesestion 2 -
// evaluate("sum")(4)(2) => 6
// evaluate("multyply")(4)(2) => 8
// evaluate("divide")(4)(2) => 2
// evaluate("substract")(4)(2) => 2
// create function

function evaluate(operation) {
  return function (numA) {
    return function (numB) {
      if (operation === "sum") return numA + numB;
      else if (operation === "multyply") return numA * numB;
      else if (operation === "divide") return numA / numB;
      else if (operation === "substract") return numA - numB;
      else return "Invalid Operation";
    };
  };
}
console.log(evaluate("sum")(4)(2)); // 6
console.log(evaluate("multyply")(4)(2)); // 8
console.log(evaluate("divide")(4)(2)); // 2
console.log(evaluate("substract")(4)(2)); // 2

const mul = evaluate("multyply");
console.log(mul(3)(5)); // 15
console.log("---------------------");

// Quesestion 3 - Infinite Currying --> sum(1)(2)(3)....(n)

function add(a) {
  return function (b) {
    // if there is a valueinside of B or not only then it's going to return the addition
    // ptherways just initial 5 values
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(1)(2)()); // 3
console.log(add(5)(2)(4)(8)()); // 19

// 1st 5+3 return 7 so 7 went inside add(a) function --> add(7)
// then 7 + 4 and etc
console.log("---------------------");

// Quesestion 4 - Currying vs Partial Application

function summ(a) {
  return function (b, c) {
    return a + b + c;
  };
}
const x = summ(10);

console.log(x(5, 6));
console.log(x(3, 2));

// or

console.log(sum(20)(1, 4));

// This is not currying
// This is Partial Application which transforms a function into another function with small arity

// Arity means the number operands or the arguments are function receives

// In case of Currying we would have written this way
function summ(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(sum(20)(1, 4));
console.log("---------------------");

// Quesestion 5 - Manipulating DOM
// Real world scenario for using currying while developing our application