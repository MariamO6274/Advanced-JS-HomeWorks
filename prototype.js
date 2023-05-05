var a = {};
var b = function () {};
var c = [];

Array.prototype.myMap = () => {
  console.log("myMap is called");
};

var person = {
  lastname: "DefaultLastName",
  printFullName: function () {
    console.log(this.firstname + "  " + this.lastname);
  },
};

var myobj = {
  firstname: "Tom",
};

// DO NOT TRY THIS IN PROJECT: DANGER
person.__proto__ = myobj; // This will introduce a new prototype for person object.

// SO the proto of person will start pointing to myObj.
// Hence, if any property is not present in person object, then it will try to check it in the myobj
// like here the firstname is not present in person obj,  but ts present in myobj

person.printFullName();

// =========================================================================================
// How do we make use of prototype effeciently in our code
// Here is an example

// Lets suppose we have 3 different objects

//let newCar = new Object;

let volvo = {
  color: "Black",
  // printDetails: function() {
  //     console.log("The color of car is: ", this.color);
  // }
};
let toyota = {
  color: "white",
  // printDetails: function() {
  //     console.log("The color of car is: ", this.color);
  // }
};
let honda = {
  color: "grey",
  // printDetails: function() {
  //     console.log("The color of car is: ", this.color);
  // }
};

console.log(volvo);
console.log(toyota);
console.log(honda);

var arr56 = [2, 4];
var arr57 = [2, 4];

console.log(arr56);

Object.prototype.printDetails = () => {
  console.log("The color of car is: ");
};

Array.prototype.printArrayDetails = () => {
  console.log("Array details");
};
