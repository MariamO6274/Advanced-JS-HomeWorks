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
var numStudents = ["Mariami", "Giorgi", "Beka", "Lika", "Levani", "Rezi"];
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
