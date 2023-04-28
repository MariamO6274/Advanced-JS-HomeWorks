// Closures


// A closure is where an inner function has access to the outer function's variables.

const min_age = 18;

const canVote = (age) => {
  if (age >= min_age) {
    return true;
  }
};
// The function canVote is able to access variables in the outer scope.

// When JavaScript encounters the variable min_age 
// it starts looking to see if it's defined inside the current function.
// If that's not the case, so it goes up.


// Note that closures only have access to the outer scope 
// but never to other functions' scope when they're at the same level.

const createUser = () => {
  // CANNOT access variable `age`
  // CAN access variable `min_age`
};
console.log("Closure scope chains");

//==============================

const Navbar = () => {
  let dark_theme = false;

  const handleButtonClick = () => {
    dark_theme = !dark_theme; // flip false to true, and true to false
  };
};

// The outer function is Navbar which defines the variable dark_theme.

// So when JavaScript encounters the variable dark_theme inside handleButtonClick,
// it will look to see if it's defined inside the function handleButtonClick.
// It's not defined there, so it goes up and looks in the scope of its outer function,
// which is Navbar and it finds it there and you will have access to that variable.


console.log("Scope chains");

//==============================

// A closure has three scope chains. We call them scope chains because JavaScript starts looking for where to find a variable in this specific order:

// 1. Variables in their own scope (variables defined between the curly braces of a function).
// 2. Variables defined in the outer function's scope.
// 3. Variables defined in the global scope.

/* global scope */
const maxAge = 18;

const init = () => { /* outer function */
    const button = document.querySelector("button");
    const age = Number.parseInt(document.querySelector("#age").value, 10);

    button.addEventListener("click", () => { /* inner function */
        // age accessible from outer function's scope
        // maxAge is accessible from the global scope
        // button is accessible from outer function's scope
        if (age >= maxAge) {
            button.classList.add("success");
        } else {
            button.classList.remove("success");
        }
    });
}

// Notice how from the inner function (the click event handler),
// we are able to access variables defined in the outside function (init). 
// For example the variables age and button.
// Also, from within the inner function, we are able to access the variable maxAge
// which is defined in the global scope (outside both functions).

// In conclusion, a closure is the combination of a function bundled together
// with its surrounding variables.
//===================================

console.log("Example")

// start with a variable (state) saying that the confetti is NOT shown yet
// this variable is defined in the global scope
let isConfettiShown = false;

const runBtn = document.querySelector("#run-btn");
runBtn.addEventListener("click", () => {
    if (isConfettiShown) {
        return false;
    }
    showConfetti(); //call a fictional function that shows the confetti
    isConfettiShown = true; // set the state variable as true
});

// Notice how from inside the function we're able to change the value of the variable defined outside.
// Once isConfettiShown becomes true, the confetti won't be shown again
// because of the if condition:

// A common example of closures is to define a variable outside a function
// that can then be used and changed inside the inner function.


//===================================


function outer1() {
  var num = 10;

  function inner1() {
    var num2 = 20;
    return num2;
  }
  var j = inner1();
  return j; // 20
}

var i = outer1();

//console.log(i); 

function outer() {
  var num = 10;

  function inner() {
    var num2 = 20;
    return num2;
  }
  return inner;
}

var i = outer();
console.log(i);
