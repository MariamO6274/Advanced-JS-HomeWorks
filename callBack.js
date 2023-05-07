// Simple definition:

// When We pass a function Y to a function X
// And X decides when to call Y
// Master function will decide when to call normal function
// Normal functon should be passed as argument to master function

// function calculate (a, b, operation) {
//     if (operation == "add")
//         return a+b;

//     if (operation == "subtract")
//         return a-b;

//     if (operation == "customOp1") {
//         return (a+b/a-b);
//     }
//     if (operation == "customOp2") {
//         return (a-b/a+b);
//     }

// }

// let output = calculate(2,5, "add");
// let output2 = calculate(2,5, "subtract");

// let output3 = calculate(2,5, "customOp1");
// let output4 = calculate(2,5, "customOp2");

// console.log(output);
// console.log(output2);

function restaurant(recipe) {
  recipe();
}

// Customers can go to this restaurant and kitchen is open to make own recipe

function pizzaRecipe() {
  // steps to prepare pizaa
}

restaurant(pizzaRecipe);

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function customop(a, b) {
  return a - b / a + b;
}

function calculate(a, b, operation) {
  return operation(a, b);
}

calculate(2, 3, add);
calculate(2, 3, subtract);

calculate(4, 5, customop);

// I can also write inline logic
calculate(9, 6, function (a, b) {
  console.log("custom op 2 called");
  return a * b - a;
});

function e1() {
  console.log("e1 called...");
}

e1();

setTimeout(e1, 1000);

function A(cb) {
  console.log("Hello " + name);
  cb();
}

function call1() {
  console.log("Callback fucnction");
}

A(call1);
