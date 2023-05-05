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

