// FUNCTIONS 
// Q1 - What is a Function Declaration?

function square1(num){
    return num * num
}

// this is also can be called function definition or function statement

//---------------------------------------------------------------------------

// Q2 - What is Function Expression? - when you store function inside variable
const square2 = function (num) {
    return num * num
}

// this function doesn't have name so we are assighniing it to variable
/**
 * function (num) {
 *      return num * num
 * }
 * 
 * this is an Anonymous function, no name (it can also be a callback)
 * 
 * Function Declaration and Function Expression is basiclly same 
 * difference is Function Declaration are assighned it to variable
 */

//---------------------------------------------------------------------------

// Q3 - What are First Class Functions? - in a language where functions can be treated
                                        // like a variable there functions are called called
                                        // first class functions, in this cases functions can
                                        // be passed into another functions, can be used, 
                                        // manipulated and basicly what variable can do function can do

// Ex.

function square(num){
    return num * num;
}

function displaySquare(fn){
    console.log("Square is ", fn(5))
}
displaySquare(square)

//---------------------------------------------------------------------------

// Q4 - What is IIFE? - Immidatly Invoked Functions Exspressions instead of regular function call square3() 
                                            // we wrap everything in () and adding () we can pass arguments as well


(function square3(num) {
  console.log(num * num);
})(5)  // 25