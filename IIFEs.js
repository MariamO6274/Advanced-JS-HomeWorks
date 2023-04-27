// The IIFE pattern was a way to avoid variables declared with var from becoming global variables.




function e1() {
  var num2 = 400;
  this.num2 = 500;
  //console.log("This is in function");
}
e1();

// Parser?
// For Function, the JS parser/engine will always check for a name after it sees function keyword
// But what if we want to write a function without keyword?
// We need to fool the parser..!

3;
("Its a String");

(function () {
  console.log("This is anonymous function...");
})();

//e1();

// When to use this kind of functions?
// When we want safe code.

(function () {
  let num = 100;
  let num3 = 200;
})();
var num = 200;
console.log(num);

console.log(num2);

// When we try to include any library in our project
// it runs the IIFE once and creates an environment for itself
//

// Some points on functions
r1();
r2();

function r1() {
  console.log("r1 function called");
}

var r2 = function () {
  console.log("r2 function called");
};
