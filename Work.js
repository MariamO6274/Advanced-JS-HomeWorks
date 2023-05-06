console.log("practice");

// var person = {
//     firstName: "Mariam",
//     lastName: "Ost",
//     getFullName: function (){
//         var fullName = `${this.firstName} ${this.lastName}`
//         return fullName;
//     }

// }

// var logName = function(lang1, lang2) {
//     console.log("Logged: "+ this.getFullName());
// }

// var logPersonName = logName.bind(person);
// logPersonName();

//=========================================================================

// const pers = {
//   firstName: "Mariamo",
//   lastName: "OStatish",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const children = {
//   firstName: "Lazare",
//   lastName: "Nikolas",
// };

// let fullName = pers.fullName.bind(children);
// console.log(fullName);

console.log(
  "<---------------------------Home Work--------------------------->"
);

// Date : 4 May 2023
// call APply bind Practice steps
// 1. create some person obj with firstname, lastname and printDetails function
//          Remember to use 'this' in your function
// 2. Create another person obj, and try to borrow the function from person1
// 3. Use call and apply methods on person obj
// 4. Introduce at least 2 arguments to your printDetails function.
// 5. Pass these arguments through call, apply methods
// 6. Now use bind to create copies of function (with some context)

var printDetails = function (city, country) {
  console.log(
    `${this.firstname} ${this.lastName} lives in ${city}, ${country}`
  );
};

var person = {
  firstname: "Mari",
  lastName: "Ost",
};

var anotherPerson = {
  firstname: "Mariam",
  lastName: "Ostatishvili",
};

var person2 = {
  firstname: "Nino",
  lastName: "Ostatishvili",
};

printDetails.call(anotherPerson, "Tbilisi", "Georgia");
printDetails.call(person2, "Tbilisi", "Georgia");
printDetails.apply(anotherPerson, ["Colorado", "USA"]);
printDetails.apply(person, ["Gori", "Georgia"]);

// we can make var array and pass var name to the apply

var useBind = printDetails.bind(person2);
useBind("Brooklyn", "NY");

var useBind2 = printDetails.bind(anotherPerson, "London", "England");
useBind2();

//=========================================================================

//prototype

// 1. Check the prototype chain of each Array, function and object types
// 2. Create an object and try to point its prototype to a different obj
// 3. Check how the property is picked up from prototype chain (you should have a missing prop in orig object,
// but it should be present in your prototype chain)

// 4. Use prototype effeciently. example of multiple objects with same function.
// 5. Declare the function on prototype, and remove it from individual objects. And then call the function
// Try some online examples also

//===================
//check array
var numStudents = ["Mariami", "Giorgi", "Beka", "Lika", "Levani", "Rezi"]
console.log("numStudents");

Array.prototype.arrayDetails = () => {
  console.log("Check for array");
};
//===================


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

//when you don't want to usegeneric function
// prototyle base object
Object.prototype.details = () => {
  console.log("studies in despani technology since ", this.month);
};

//when we are calling student1.details()  in dev tool it gives me undefind,bc of this is not pointing to a student1? how to??
