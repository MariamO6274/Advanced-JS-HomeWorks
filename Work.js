// console.log("practice");

// // var person = {
// //     firstName: "Mariam",
// //     lastName: "Ost",
// //     getFullName: function (){
// //         var fullName = `${this.firstName} ${this.lastName}`
// //         return fullName;
// //     }

// // }

// // var logName = function(lang1, lang2) {
// //     console.log("Logged: "+ this.getFullName());
// // }

// // var logPersonName = logName.bind(person);
// // logPersonName();

// //=========================================================================

// // const pers = {
// //   firstName: "Mariamo",
// //   lastName: "OStatish",
// //   fullName: function () {
// //     return this.firstName + " " + this.lastName;
// //   },
// // };

// // const children = {
// //   firstName: "Lazare",
// //   lastName: "Nikolas",
// // };

// // let fullName = pers.fullName.bind(children);
// // console.log(fullName);

// console.log(
//   "<---------------------------Home Work--------------------------->"
// );

// // Date : 4 May 2023
// // call APply bind Practice steps
// // 1. create some person obj with firstname, lastname and printDetails function
// //          Remember to use 'this' in your function
// // 2. Create another person obj, and try to borrow the function from person1
// // 3. Use call and apply methods on person obj
// // 4. Introduce at least 2 arguments to your printDetails function.
// // 5. Pass these arguments through call, apply methods
// // 6. Now use bind to create copies of function (with some context)

// var printDetails = function (city, country) {
//   console.log(
//     `${this.firstname} ${this.lastName} lives in ${city}, ${country}`
//   );
// };

// var person = {
//   firstname: "Mari",
//   lastName: "Ost",
// };

// var anotherPerson = {
//   firstname: "Mariam",
//   lastName: "Ostatishvili",
// };

// var person2 = {
//   firstname: "Nino",
//   lastName: "Ostatishvili",
// };

// printDetails.call(anotherPerson, "Tbilisi", "Georgia");
// printDetails.call(person2, "Tbilisi", "Georgia");
// printDetails.apply(anotherPerson, ["Colorado", "USA"]);
// printDetails.apply(person, ["Gori", "Georgia"]);

// // we can make var array and pass var name to the apply

// var useBind = printDetails.bind(person2);
// useBind("Brooklyn", "NY");

// var useBind2 = printDetails.bind(anotherPerson, "London", "England");
// useBind2();

// //=========================================================================

// //prototype

// // 1. Check the prototype chain of each Array, function and object types
// // 2. Create an object and try to point its prototype to a different obj
// // 3. Check how the property is picked up from prototype chain (you should have a missing prop in orig object,
// // but it should be present in your prototype chain)

// // 4. Use prototype effeciently. example of multiple objects with same function.
// // 5. Declare the function on prototype, and remove it from individual objects. And then call the function
// // Try some online examples also

// //===================
// //check array
// var numStudents = ["Mariami", "Giorgi", "Beka", "Lika", "Levani", "Rezi"];
// console.log("numStudents");

// Array.prototype.arrayDetails = () => {
//   console.log("Check for array");
// };
// //===================

// var student1 = {
//   firstName: "Giorgi",
//   month: "April",
//   // details: function () {
//   //   console.log("studies in despani technology since", this.month);
//   // }
// };

// var student2 = {
//   firstName: "Lika",
//   month: "May",
//   // details: function () {
//   //   console.log("studies in despani technology since", this.month);
//   // },
// };

// var student3 = {
//   firsName: "Mariam",
//   month: "June",
//   // details: function () {
//   //   console.log("studies in despani technology since", this.month);
//   // },
// };

// var student4 = {
//   firsName: "Levan",
//   month: "July",
//   // details: function () {
//   //   console.log("studies in despani technology since", this.month);
//   // },
// };

// console.log(student1);
// console.log(student2);
// console.log(student3);
// console.log(student4);

// // Object.prototype.details = () => {
// //   console.log("studies in despani technology since ", this.month);
// // };

// //when we are calling student1.details()  in dev tool it gives me undefind,bc of this is not pointing to a student1? how to??

// function Details(month) {
//   console.log("I am a new function");
//   this.month = month;
// }
// Details.prototype.printDetails = function () {
//   console.log("print it " + this.month);
// };

// let students = new Details("June");
// students.printDetails();


// //=============================================== GO OVER 
// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
// }

// Rectangle.prototype.isSquare = function () {
//   let isItSquare = false;
//   if (this.width === this.height)
//     isItSquare = true;
//   return isItSquare;
// };
// //==================

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }
// var circle = new Circle(1);
// console.log(circle);

// //=============================================== new And Constructor



// function Person6(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;

// }

// Person6.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };


// Person6.prototype.voting = function () {
//   return this.age >= 18;
// };

// const student = new Person6("Mariam", "Ostatish", 34);
// console.log(student.getFullName()); // "Mariam Ostatish"
// console.log(student.voting()); // true




// //=============================================== Call backs

// var a = (callback) => {
//   setTimeout(() => {
//     console.log(`I am 1 st function`);
//     callback();
//   }, 2000);
// };

// var b = () => {
//   console.log(`I am 2nd function`);
// };

// a(b);

// //=============================================== 

// var welcomePerson = (name, callback) => {
//   setTimeout(() => {
//     console.log(`Welcome ${name}`);
//     callback(); 
//   }, 1000);
// };

// //======================

// console.log("1");
// setTimeout(() => {
//   console.log("2");
// },0);
// console.log("3"); //1 3 2



//=========================== Promises Practis 

// console.log("A");
// wait(2000).then(() => {
//   // this runs when the wait(milliseconds) function has completed successfully
//   console.log("B");
// });
// console.log("C");

// const wait = (milliseconds) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, milliseconds);
//   });
// };


//==========================================go over it
// let checknotifications = function() {
    
//     fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json")
    
// }

// let result = checknotifications();
// console.log(result);



//==========================================
// Revise map, filter reduce

// ///////////////////map
// var names = ["mariami", "gioRgi"];
// var upperNames = names.map(function (name) {
//   return name.toUpperCase();
// });
// console.log(upperNames);
// console.log("---------------------");

// //double it
// var doubleNumbers = [4, 2, 5, 8];

// var doubled = doubleNumbers.map(function (number) {
//   return number * 2;
// });
// console.log(doubled); 
// console.log("---------------------");


// ///////////////////filter
// var nums = [9, 5, 14, 3, 11]; //calle it 5 times

// var numbersAboveTen = nums.filter(function(number) {
//     return number > 10;
// });
// console.log(numbersAboveTen); 
// console.log("---------------------");
// //will get another array back, with some of the items from orig array, new array

// var years = [2000, 2008, 2020, 2023];

// var yearlowerthen2010 = years.filter(function (year) {
//   return year >= 2010;
// });

// console.log(yearlowerthen2010);
// console.log("---------------------");

// //temperature 
// function getPositiveTemperatures(temperatures) {
//     return temperatures.filter(function(temperature) {
//         return temperature > 0;
//     });
// }

// console.log(getPositiveTemperatures([-5, 12, 3])); 
// console.log(getPositiveTemperatures([1, -3, -2, 4, 10]));
// console.log("---------------------");


// ///////////////////reduce
// var grades = [10, 15, 5];
// var sum = grades.reduce((total, current) => {
//   return total + current;
// }, 0);

// //total is 0 ... 0 + 10
// //current is first item in array
// //then total is 10 

// //addition ++++
// let grades1 = [10, 5, 15, 20];

// let sum1 = grades1.reduce((total, current) => {
//   console.log(`Total is ${total}`);
//   console.log(`Current is ${current}`);
//   console.log("---------------------");
//   return total + current;
// }, 0);

// console.log(`Sum is ${sum1}`);
// console.log("---------------------");

// //multiplication ****
// var numbers = [5, 2, 10];

// var result = numbers.reduce((total, current) => {
//     return total * current;
// }, 1); 
// console.log(result); 
// console.log("---------------------");

// const multiplyNumbers = (numbers) => {
//   return numbers.reduce((total, current) => {
//     return total * current;
//   }, 1);
// };

// console.log(multiplyNumbers([10, 20, 30])); 
// console.log(multiplyNumbers([2, 4, 2, 10]));

//================================================================
var pets = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rebbit"];

var petCounts = pets.reduce(function (obj, pet) {
  if (!obj[pet]) {
    obj[pet] = 1;
  } else {
    obj[pet]++;
  }
  return obj;
}, {});

console.log(petCounts);


let obj = {
  greetingMessage: "Welcome to Scaler Academy",
  funOne() {
    console.log(this);
  },
  funTwo: () => {
    console.log(this);
  },
};

obj.funOne();
let fun = obj.funOne;
fun();
obj.funTwo();
let a = obj.funTwo;
a();

