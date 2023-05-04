var printfullName = function (city, country) {
  console.log(
    "FirstName: " +
      this.name +
      " LastName: " +
      this.lastname +
      " Lives in: " +
      city +
      " ," +
      country
  );
};

var person1 = {
  name: "Tom",
  lastname: "Hank",
};

var person2 = {
  name: "Sam",
  lastname: "Johnson",
  // printfullName: function() {
  //     console.log("FirstName: " + this.name + " LastName: "+ this.lastname);
  // }
};
var person3 = {
  name: "person3",
  lastname: "p3LastName",
  // printfullName: function() {
  //     console.log("FirstName: " + this.name + " LastName: "+ this.lastname);
  // }
};

// person1.printfullName("Paris");

// Function borrowing concept
// person2 and person3 are borrowing the function from person1

// printfullName.call(person2, "NewYork", "USA");
// printfullName.call(person3, "Pune", "India");

// let details = ["NewYork", "USA"];
// printfullName.apply(person2, details);
// printfullName.apply(person3, ["Pune", "India"]);

// bind
// Bind will return us a new FUNCTION
let printPerson2Function = printfullName.bind(person2);
//console.log(newPrintFunction);

printPerson2Function("Pune", "India");
printPerson2Function("Paris", "France");

let printPerson1Function = printfullName.bind(person1);
printPerson1Function("Pune", "India");
printPerson1Function("Paris", "France");

let printPerson1Function2 = printfullName.bind(person1, "Pune");

//======================================================
// How copies help us to create new meaningful functions
//======================================================

let multiply = function () {
  console.log(this.x * this.y);
};

multiply(2, 3);

// Suppose I want to create a function which should take one number
// as input and return me multiple of 2 or 3 or 4

let obj = {
  x: 2,
  y: 4,
};

var multiply2 = multiply.bind(obj, 3);
multiply2(3);
multiply2(5);

let add = function (x, y) {
  console.log(x + y);
};

var add2 = multiply.bind(this, 3);
add2(5);

// Important to NOTE:
// first argument of bind will freeze your context (which object to refer to if your function has 'this' keyword)
// Seconnd argument onwards, the bind will freeze your arguments of function
// So in above case, multiply function is using only this.x and this.x, it is not using any passed arguments (x,y),
// So here the object that you pass to bind will freeze the this.x and this.y value. Any arguements passed will not be used
//
// however in add function, it is using only the arguments
// so here we can freeze the arguments with bind. multiply.bind(this, 3);
// It will freeze the context as 'window' and first arguments will be frozen as 3
// So now it will accept only second argument add2(5);
