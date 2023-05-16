//==================================================================================

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! prototypes


// In order to reduce memory space we use prototypes 
// Prototype is a superpower


// If we want to have only one function instance associated with every animal object.
// What do we do?

// We can use bind
// we can use Prototype

var person1 = {
  firstName: "Mari",
  lastName: "Ostatishvili",
  year: 1988,
};

var person2 = {
  firstName: "Giga",
  lastName: "Lelashvili",
  year: 1989,
};

var person3 = {
  firstName: "Lazare",
  lastName: "Lelashvili",
  year: 2018,
};

var person4 = {
  firstName: "Nikolas",
  lastName: "Lelashvili",
  year: 2020,
};

Object.prototype.familyFullname = function () {
  console.log("My family member is: " + this.firstName + " " + this.lastName);
};

person1.familyFullname();
person2.familyFullname();
person3.familyFullname();
person4.familyFullname();

// call-ისგან განსხვავებით აქ ჯერ ვიღებთ obj სახელს მერე ფუნქციას და ვიძახებთ, Object.prototype.familyFullname 
// every js obj can accese to Object.prototype when you write this way (Object.prototype)


//use new key
var student1 = {
  firstName: "Giorgi",
  month: "April",
  
};

var student2 = {
  firstName: "Lika",
  month: "May",
  
};

var student3 = {
  firsName: "Mariam",
  month: "June",

};

var student4 = {
  firsName: "Levan",
  month: "July",

};

console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);

Object.prototype.details = function() {
  console.log("Print date for studing: ", this.month);
};

function Details(month) {
  console.log("I am a new function");
  this.month = month;
}
Details.prototype.printDetails = function () {
  console.log("print it " + this.month);
};

let students = new Details("June");
students.printDetails();


