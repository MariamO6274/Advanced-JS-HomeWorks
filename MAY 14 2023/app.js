//Arrow function VS Normal function example in obj

var person = {
  firstname: "Tom",
  lastname: "Hank",
  printName: () => {
    console.log("Firstname: " + this.firstname + "Lastname: " + this.lastname);
  },
};

person.printName();
console.log("-----------------------");

//this will be undefind because arrow function does not have it's own this
// normal function will give Firstname: Tom Lastname: Hank
//Let's see

var person1 = {
  firstName: "Mariam",
  lastName: "Ostatishvili",
  printFullname: function () {
    console.log(`My full name is ${this.firstName} ${this.lastName}`); 
  },
};

person1.printFullname(); //My full name is Mariam Ostatishvili

console.log("-----------------------")

var person2 = {
  fName: "Mari",
  lName: "Ost",
  getFullName: function () {
    console.log("First name is " + this.fName + " Last name is " + this.lName);
  },
};
person2.getFullName(); //First name is Mari Last name is Ost

//==================================================================================

// when we have regular function do not use -> this <- to clg patrameters
// also additional parameter gives you undefind

let address = function (buildingName, street) {
  console.log( "Building: " + buildingName +  " street: " +  this.street +  " country: " +  this.country);
};

address("Palladium", "Times Square"); //Building: Palladium street: undefined country: undefined (we don't have country)

console.log("-----------------------------")

function one (city, streetName){
  console.log("City " + this.city + " Street " + streetName);
}

one("Tbilisi", "Vaja P.") //City undefined Street Vaja P.

//==================================================================================
