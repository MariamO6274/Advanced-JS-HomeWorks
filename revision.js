var person = {
  firstname: "Tom",
  lastname: "Hank",
  printName: () => {
    console.log("Firstname: " + this.firstname + "Lastname: " + this.lastname);
  },
};

person.printName();

// Arrow function gives undefined
// normal function will give "Tom Hank"

//==================================================================================

//this.buildingName = "Palladium";

let address = function (buildingName, street) {
  console.log(
    "Building: " +
      this.buildingName +
      " street: " +
      this.street +
      " country: " +
      this.country
  );
};

address("Palladium", "Times Square");

//==================================================================================

let homeAddress = function (buildingName, street) {
  console.log(
    "Building: " +
      buildingName +
      " street: " +
      street +
      " country: " +
      this.country
  );
  
};

let giorgiAddress = {
  buildingName: "Empire building",
  street: "Main street",
  country: "USA",
};
let mariamAddress = {
  buildingName: "Red building",
  street: "Museum street",
  country: "USA",
};

// call is used to call functions
//homeAddress("Empire building", "Main street");

homeAddress.call(giorgiAddress, "Empire building", "Main street");

homeAddress.call(mariamAddress, "Empire building");


let animalObj = {
  legs: 4,
  color: "black",
  // printAnimalDetails: function() {
  //     console.log("Animal Details: Legs: "+ this.legs + " Color: " + this.color);
  // }
};

//animalObj.printAnimalDetails();


console.log(animalObj);

let animalObj1 = {
  legs: 2,
  color: "brown",
  // printAnimalDetails: function() {
  //     console.log("Animal Details: Legs: "+ this.legs + " Color: " + this.color);
  // }
};
let animalObj2 = {
  legs: 8,
  color: "white",
  // printAnimalDetails: function() {
  //     console.log("Animal Details: Legs: "+ this.legs + " Color: " + this.color);
  // }
};

// These objects have 2 properties and 1 function
// The properties are different but the function nature is exactly same
// I do not want the function to be on every object. As it takes a lot of space
// If we have 100 animals objects, we will have 100 functions. Which is not very good.

// If we want to have only one function instance associated with every animal object.
// What do we do?

// We can use bind
// we can use Prototype

Object.prototype.printAnimalDetails1 = function () {
  console.log("Animal Details: Legs: " + this.legs + " Color: " + this.color);
};

animalObj.printAnimalDetails1();
animalObj1.printAnimalDetails1();
animalObj2.printAnimalDetails1();

// Note: If we use Object.prototype, then that tunction will be available for EVERY JS OBJECT

// What if we do not want to make it available for every JS object?
// But we want it to be only for lets say CAR oBJECT?

// let Car = {
//     make: "Honda",
//     model: "City"
// }

// let car1 = new Car();
// console.log(car1);

// The above code gives an error, becaue new operator can only be used with functions
// new keyword, helps us create a new obj from a function, and also it will assign prototype to it

//==============================
function car(make, model) {
  this.make = make;
  this.model = model;
}

car("Honda", "City");
console.log(this);
// This simple call to Car function, will be executed
// After execution, we see that the this keyword inside the Car function is pointing to window/global object
// SO the make and model variables will be created on global object.

//===================
// But what if we use new operator to call Car function?

// new operator ALWAYS returns a object. It will create an object of the function (hence named as constructor)
let car1 = new car("Toyota", "Camry");
console.log("this: ", this);
console.log("car1: ", car1);

// Its same as creating the car1 obj as below
// let car1 = {
//     make: "Toyota",
//     model: "Camry"
// }

let car2 = new car("Hyundai", "Creta");
let car3 = new car("Merc", "Class S");

// Now we want to have a function, which should common between Car objects, but should not be accessible to any other objects like animal etc.

car.prototype.printCarDetails = function () {
  console.log(" Make: " + this.make + " MOdel : " + this.model);
};

car1.printCarDetails();
car2.printCarDetails();
car3.printCarDetails();

//=============================================================
// car objects are able to access animalDetails function
car1.printAnimalDetails1();
// But animalObjects cannot access carDetails function
// So this will throw error
animalObj1.printCarDetails();
// WHY?
