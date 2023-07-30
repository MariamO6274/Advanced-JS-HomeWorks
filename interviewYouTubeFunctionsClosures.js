// CLOSURES
// Closure - is a function that references variables in the outer scope from
//inner scope.

// What is lexical scope? - Scope refers to the current context of your code.
//it can be eather globally or locally defined.

// Lecical scope - means that a variable defined outside a function
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
    // inner scope
    function displayName(){
        // inner scope
        console.log(myName)
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
  function displayName() { // inner function called display name
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