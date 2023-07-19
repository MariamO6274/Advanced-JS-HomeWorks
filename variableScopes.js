console.log("Hello");

console.log("Some new changes");

// Global scope
var a = 0;
let b = 20;
const c = 30;

{
  // Block scope
  console.log(a);
  console.log(b);
  console.log(c);
  var x = 100;
  let y = 200;
  const z = 300;
  {
    // Block scope
    b = 500;
    console.log(b);
  }
}

console.log(x);
//console.log(y);
//console.log(z);

function sampleFunc() {
  console.log("My sample function called");
}

sampleFunc();

function add(a, b) {
  const sum = a + b;
  // console.log(sum);
  return sum;
}

const sum = add(4, 6);
console.log(sum);

console.log(add(3, 6));

// Arrow Functions
const sampleArrowFunction = () => {
  console.log("Sample arrow function called..");
};

sampleArrowFunction();

//
(function () {
  console.log("Anonymous function called....");
})();

// a();
// How will you call anonymous function? --> adding () to end
// IIFEs : Immediately invoked functions
