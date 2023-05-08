// What are function constructors?

// Simple: Its normal function, but its used to construct objects

function Person() {
  console.log("This is Person function called");
}

let value = Person();
console.log(value);

let value1 = new Person();

console.log(value1);

// Now again, lets see some more simple functions

function Car(make, color) {
  // These 2 lines are useful when just invoking he function normally with/without new
  console.log("Car function called..!");
  console.log("Make: " + make + " Color: " + color); /// calling

  // These 4 lines are useful when used with new keyword
  console.log(this); /// empty obj
  this.make = make;
  this.color = color;
  console.log(this); /// with proprtyies
}
///methods 
Car.prototype.printDetails = function () {
  console.log("Print Details called: " + this.make + " " + this.color);
  // console.log(this);
};

Car("Toyota", "Black");

let myCar1 = new Car("Honda", "Blue");
myCar1.printDetails();
//console.log(myCar1); ///returning
