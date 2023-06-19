//CLOSURES

// When functio returns a function and
// An inner function has access to the outer function's variables.

function greet(saysomething){
    return function(name){
        console.log(saysomething + " " + name);
    }
}
let sayHi = greet("Hi"); //set variable equle to the function/ saysomething variable is created here
sayHi("Mariam");

// Exsplane
// I have a function that returns a function.
// when I call greet() when I invoke it, I'll get a value back
// I'm going to get a function that I can then invoke again.
// (Because functions are objects I can just return it as a value.)

// When this code starts, we have our Global Execution Context.

// When I hit this line-11 sayHi = greet, it invokes the greet function, the new execution context is created.
// And that variable that's passed to it, saysomething, is sitting in its variable environment.
// It returns a new function object. (Line 7-9)

// And then we invoke the function that sayHi and then that creates a new execution context.
// I have passed name variable "Mariam"

// It doesn't matter whether the outer functions have finished running or not.
// Inner function had acces to outer functions variable (goes by scope change)
// And even though the execution context of that function greet is gone,
// was popped off the stack, the sayHi execution context still has a reference
// to the variables, to the memory space of its outer environment.



//=======================================================================================


// CALLBACKS

// Function passed as an argument to another function.
// Giving this function to another function and having it execute when it's done,

// I executed you, and you in turn execute this other function for me when you're done.

const a = (callback) => {
  setTimeout(() => {
    console.log("I am a first function");
    callback(); //in this case function call back is b function 
  }, 5000);
};

const b = () => {
  console.log("I am a second function");
};

a(b);

// If we call a() and b() we'll get "I am a second function" and
// then after 5 sec --> "I am a first function"

//=======================================================================================


// CALLBACKS