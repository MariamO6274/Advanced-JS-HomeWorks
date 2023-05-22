/**
  
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

