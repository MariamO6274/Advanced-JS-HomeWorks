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


//=================== HOME WORK =========================

var student1 = {
  firstName: "Giorgi",
  month: "April",
  // details: function () {
  //   console.log("studies in despani technology since", this.month);
  // }
};

var student2 = {
  firstName: "Lika",
  month: "May",
  // details: function () {
  //   console.log("studies in despani technology since", this.month);
  // },
};

var student3 = {
  firsName: "Mariam",
  month: "June",
  // details: function () {
  //   console.log("studies in despani technology since", this.month);
  // },
};

var student4 = {
  firsName: "Levan",
  month: "July",
  // details: function () {
  //   console.log("studies in despani technology since", this.month);
  // },
};

console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);

// Object.prototype.details = () => {
//   console.log("studies in despani technology since ", this.month);
// };

//when we are calling student1.details()  in dev tool it gives me undefind,bc of this is not pointing to a student1? how to??

function Details(month) {
  console.log("I am a new function");
  this.month = month;
}
Details.prototype.printDetails = function () {
  console.log("print it " + this.month);
};

let students = new Details("June");
students.printDetails();


//=============================================== GO OVER 
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.isSquare = function () {
  let isItSquare = false;
  if (this.width === this.height)
    isItSquare = true;
  return isItSquare;
};
//==================

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
var circle = new Circle(1);
console.log(circle);

//=============================================== new And Constructor



function Person6(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

}

Person6.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};


Person6.prototype.voting = function () {
  return this.age >= 18;
};

const student = new Person6("Mariam", "Ostatish", 34);
console.log(student.getFullName()); // "Mariam Ostatish"
console.log(student.voting()); // true




//=============================================== Call backs

var a = (callback) => {
  setTimeout(() => {
    console.log(`I am 1 st function`);
    callback();
  }, 2000);
};

var b = () => {
  console.log(`I am 2nd function`);
};

a(b);

//=============================================== 

var welcomePerson = (name, callback) => {
  setTimeout(() => {
    console.log(`Welcome ${name}`);
    callback(); 
  }, 1000);
};

//======================

console.log("1");
setTimeout(() => {
  console.log("2");
},0);
console.log("3"); //1 3 2

//======================